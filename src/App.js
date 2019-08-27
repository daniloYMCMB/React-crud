import React from 'react';
import "../node_modules/css-reset-and-normalize/css/reset-and-normalize.css";
import './App.css';
import styled from 'styled-components'
import Menu from './components/Menu'
import Managedata from './components/ManageData'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Managedata></Managedata>
    </div>
  );
}

export default App;
