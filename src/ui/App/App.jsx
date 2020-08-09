import React from "react";
import Panel from "ui/Panel";
import MainContent from "ui/MainContent";
import MenuButton from "ui/MenuButton";
import ModalProgressPortal from "ui/ModalProgress";
import { Provider } from "react-redux";
import store from "store";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <div className="container">
          <div className="app__inner">
            <MenuButton />
            <Panel />
            <MainContent />
            <ModalProgressPortal></ModalProgressPortal>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
