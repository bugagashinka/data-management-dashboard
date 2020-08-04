import React from "react";
import Panel from "ui/Panel";
import MainContent from "ui/MainContent";
import MenuButton from "ui/MenuButton";
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
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
