import React, {useState} from 'react';
import Bouton4 from './Bouton4';
import './App.css';

function App() {

  const [number,setNumber] = useState(0);

  var increaseNumber = (chiffre) => {
    setNumber(number +chiffre)
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=>increaseNumber(1)}>+1</button>
      <Bouton4 increaseNumber={increaseNumber}/>
      <button onClick={()=> setNumber(0)}>RESET</button>
    </div>
  );
}

export default App;
