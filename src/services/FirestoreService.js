import * as firebase from "firebase/app";
import "firebase/storage";

const fileUploadStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
  CANCELED: "CANCELED",
};

// Set the app configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "data-management-dashboard.firebaseapp.com",
  databaseURL: "https://data-management-dashboard.firebaseio.com",
  projectId: "data-management-dashboard",
  storageBucket: "data-management-dashboard.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Get a reference to the storage service
firebase.initializeApp(firebaseConfig);

// Create a root reference
const storageRef = firebase.storage().ref();

let activeTask = null;

const downloadFiles = (data = []) => {};

const uploadFile = (path, file) => {
  return storageRef.child(`${path}/${file.name}`).put(file);
};

const updateTaskProgressSnapshot = (progress, snapshot, downloadURL = null, error = null) => {
  return progress.map((fileProgressData) => {
    const status = downloadURL ? fileUploadStatus.DONE : fileUploadStatus.IN_PROGRESS;
    if (fileProgressData.name === snapshot.ref.name) {
      return {
        ...fileProgressData,
        url: downloadURL,
        status: error ? fileUploadStatus.CANCELED : status,
        bytesTransferred: snapshot.bytesTransferred,
        totalBytes: snapshot.totalBytes,
        error,
      };
    }
    return fileProgressData;
  });
};

const createTaskProgressSnapshot = (taskSnaphot) => ({
  name: taskSnaphot.ref.name,
  path: taskSnaphot.ref.fullPath,
  url: null,
  status: fileUploadStatus.IN_PROGRESS,
  bytesTransferred: taskSnaphot.bytesTransferred,
  totalBytes: taskSnaphot.totalBytes,
});

const uploadFiles = (path, files = [], progressCallback, completeCallback) => {
  let uploadedCount = 0;
  let bytesTransferred = 0;
  let totalBytes = 0;
  const totalCount = files.length;
  const uploadTaskList = [];
  let progress = [];

  Promise.all(
    files.map((file) => {
      return new Promise((res) => {
        // Initiate upload file task
        const uploadTask = uploadFile(path, file);
        const taskRef = uploadTask.snapshot;

        // Add initiateв task to list for control pause/resume/stop purpose
        uploadTaskList.push(uploadTask);

        //Calculate files total size
        totalBytes += taskRef.totalBytes;

        progress.push(createTaskProgressSnapshot(uploadTask.snapshot));

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            bytesTransferred = 0;

            progress = updateTaskProgressSnapshot(progress, snapshot);
            progress.forEach((fileProgressData) => {
              bytesTransferred += fileProgressData.bytesTransferred;
            });

            progressCallback({
              totalCount,
              uploadedCount,
              totalBytes,
              bytesTransferred,
              progress,
              status: fileUploadStatus.IN_PROGRESS,
            });
          },
          (error) => {
            progress = updateTaskProgressSnapshot(progress, uploadTask.snapshot, null, error);
            res();
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              uploadedCount++;
              progress = updateTaskProgressSnapshot(progress, uploadTask.snapshot, downloadURL);
              progressCallback({
                totalCount,
                uploadedCount,
                totalBytes,
                bytesTransferred,
                progress,
                status: fileUploadStatus.IN_PROGRESS,
              });
              res();
            });
          }
        );
      });
    })
  ).then(() => {
    completeCallback({
      totalCount,
      uploadedCount,
      totalBytes,
      bytesTransferred,
      progress,
      status: fileUploadStatus.DONE,
    });
  });

  activeTask = {
    cancel: () => {
      uploadTaskList.forEach((task) => {
        task.pause();
        task.cancel();
      });
      activeTask = null;
    },
    resume: () => uploadTaskList.forEach((task) => task.resume()),
    pause: () => uploadTaskList.forEach((task) => task.pause()),
  };
};

const getCurrentTask = () => activeTask;

export { downloadFiles, uploadFiles, getCurrentTask, fileUploadStatus };
