import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User';

// import { Outlet } from 'react-router-dom';
import Outlet from './Outlet';
import NavBar from './NavBar';

function App() {
  
    const nodeValue="Hello World";
    return(
      <div className='App'>
        {/* <p>{nodeValue}</p>
        <User userName="Santhosh" userEmail="sant@gmail.com" userAge="10">Valtech</User>
        <User userName="Kumar"></User>
        <UserClass/> */}

        <NavBar/>
        <Outlet/>
        
      </div>
    );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;
