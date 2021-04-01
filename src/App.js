import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter } from "react-router-dom";
import Routes from "./router";
import { createBrowserHistory } from "history";

function App() {
  const browserHistory = createBrowserHistory();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
          
    </div>
  );
}


export default App;