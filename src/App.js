import React, { Component } from 'react';
import './App.css';
import Kennel from "./components/Kennel"
import EmployeeList from './components/employee/EmployeeList';

class App extends Component {
  render() {
    return (
      <div>
        <Kennel />
      </div>
    );
  }
}

export default App;
