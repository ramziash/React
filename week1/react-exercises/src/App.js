import React from 'react';
import './App.css';
import HobbyList from './components/e1';
import Guarantee from './components/e2';
import Counter from './components/e3';


function App() {
  return (
    <div className="App">

      <div style={{margin:'2em'}}> 
        <HobbyList/>
      </div>

      <div style={{padding:'2em'}}> 
        <Guarantee/>
      </div>

      <div style={{padding:'2em'}}> 
        <Counter/>
      </div>

    </div>
  );
}

export default App;
