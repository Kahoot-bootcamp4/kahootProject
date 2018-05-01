import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdminCreateGame from "./components/admin_create_game/index";



class App extends Component {
  render() {
    return (
      <div className="App">

          <AdminCreateGame/>


      </div>
    );
  }
}

export default App;
