
import './App.css';
import {useState} from 'react';

function App() {
 const [name,setName] = useState("");
 const [age,setAge] = useState(0);
 const [position,setPosition] = useState("");
 const [country,setCountry] = useState("");
 const [anualsal,setAnualsal] = useState(0);
  const display = () =>{ 
    console.log(name+age+position+country+anualsal)
  }

  return (
    <div className="App">
      <label>name:</label>
      <input 
      type='text'
      onChange={(e) =>{setName(e.target.value)}}/>

      <label> age:</label>
      <input 
      type='number'
      onChange={(e) =>{setAge(e.target.value)}}/>
    

      <label> position:</label>
      <input 
      type='text'
      onChange={(e) =>{setPosition(e.target.value)}}/>

      <label> country:</label>
      <input 
      type='text'
      onChange={(e) =>{setCountry(e.target.value)}}/>

      <label> anual salary:</label>
      <input 
      type='text'
      onChange={(e) =>{setAnualsal(e.target.value)}}/>
      <button className ="App" onClick={display}>add employee</button>

    </div>
  );
}

export default App;
