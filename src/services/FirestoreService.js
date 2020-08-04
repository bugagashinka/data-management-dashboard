import * as firebase from "firebase/app";
import "firebase/storage";

const STATE_CHANGE_EVENT = "state_changed";
const fileUploadStatus = {
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

const downloadFiles = (data = []) => {};

const uploadFile = (path, file) => {
  return storageRef.child(`${path}/${file.name}`).put(file);
};

const uploadFiles = (path, files = [], progressCallback, completeCallback) => {
  let uploadedCount = 0;
  const totalCount = files.length;
  const uploadTaskList = [];
  const progress = [];

  Promise.all(
    files.map((file) => {
      return new Promise((res) => {
        const uploadTask = uploadFile(path, file);
        uploadTaskList.push(uploadTask);
        const taskRef = uploadTask.snapshot.ref;

        uploadTask.on(
          STATE_CHANGE_EVENT,
          (snapshot) => {},
          (error) => {
            progress.push({
              name: taskRef.name,
              path: taskRef.fullPath,
              status: fileUploadStatus.CANCELED,
              error,
            });
            res();
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              uploadedCount++;
              progress.push({
                name: taskRef.name,
                path: taskRef.fullPath,
                url: downloadURL,
                status: fileUploadStatus.DONE,
              });
              progressCallback({ totalCount, uploadedCount, progress: [...progress] });
              res();
            });
          }
        );
      });
    })
  ).then(() => {
    completeCallback(progress);
  });

  return {
    cancel: () => uploadTaskList.forEach((task) => task.cancel()),
    resume: () => uploadTaskList.forEach((task) => task.resume()),
    pause: () => uploadTaskList.forEach((task) => task.pause()),
  };
};

export { downloadFiles, uploadFiles };
