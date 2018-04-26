import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserName from "./components/User_Name/UserName";
import UserStartPage from "./components/User_Start_Page/UserStartPage";


class App extends Component {
  render() {
    return (
      <div className="App">
<UserName/>
<UserStartPage/>


      </div>
    );
  }
}

export default App;
