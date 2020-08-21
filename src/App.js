import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home.js'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home nombre="Matias Fourcade"/>
    </div>
  );
}

export default App;
