import React from "react";
import Panel from "ui/Panel";
import MainContent from "ui/MainContent";
import MenuButton from "ui/MenuButton";

function App() {
  return (
    <main className="app">
      <div className="container">
        <div className="app__inner">
          <MenuButton />
          <Panel />
          <MainContent />
        </div>
      </div>
    </main>
  );
}

export default App;
