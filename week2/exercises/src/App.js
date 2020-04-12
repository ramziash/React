import React from 'react';
import Friend from './components/friend';
import DogGallery from './components/dogGallery'
import RandomJoke from './components/randomJoke';


function App() {
  return (
    <div className="App">
      
      <div style={{margin:'2em'}}> 
        <Friend/>
      </div>

      <div style={{margin:'2em'}}> 
        <DogGallery/>
      </div>

      <div style={{margin:'2em'}}> 
        <RandomJoke/>
      </div>

    </div>
  );
}

export default App;
