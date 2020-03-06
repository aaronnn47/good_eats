import React from 'react';
import './App.css';
import greens from './Images/greens.png'
import bowl from './Images/bowl.png'
import salad from './Images/salad.png'

function App() {
  return (
    <div className="App">

      <div className="text">
       <text>First design concepts</text>
      </div>

      <div className="photos">
        <img src={greens} alt=''></img>
        <img src={bowl} alt=''></img>
        <img src={salad} alt=''></img>
      </div>

      <div className="about">
        <text>Hello world this is what we are about!</text>

      </ div>

    </div>
  );
}

export default App;
