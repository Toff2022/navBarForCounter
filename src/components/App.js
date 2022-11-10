import React, { useState } from "react";
import Page from "./page";
import NavBar from "./navBar";


function App() {

const sayHello =  'Hello React'
const userName = 'Vlad'

  return (
    <div className="App">
      <h1>{ `${userName}`+ '  ' + sayHello }</h1>
      <Page />

    </div>
  );
}

export default App;
