import React from "react";
import logo from "../logo.svg";

const Page2 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick="{()=> onRouteChange('page1)}">Page 1</button>
        <button onClick="{()=> onRouteChange('page3)}">Page 3</button>
      </header>
    </div>
  );
};

export default Page2;
