import React, {useState} from 'react';
import './App.css';

function App() {

  const [number,setNumber] = useState(0);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number+1)}>+1</button>
    </div>
  );
}

export default App;
