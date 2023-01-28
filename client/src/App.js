
import './App.css';
import {useState} from 'react';
import Axios from 'axios'

function App() {
 const [name,setName] = useState("");
 const [age,setAge] = useState(0);
 const [position,setPosition] = useState("");
 const [country,setCountry] = useState("");
 const [anualsal,setAnualsal] = useState(0);
 const[employees,setEmployees] = useState([]);
 const addEmployee = () =>{
  Axios.post('http://localhost:4000/create',{
           name: name,
           age: age,
           country: country,
           position: position,
           anualsal: anualsal
   }).then(() =>{
    console.log("success")

   });
 };

 const getEmployee = () =>{
  
  Axios.get('http://localhost:4000/emp').then((response) =>{
   setEmployees(response.data)

   
  })
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
      <button className ="App" onClick={addEmployee} >add employee</button>
      <br/>
      <button onClick={getEmployee}>show employees</button>
      {employees.map((val) =>{
        return <div key={val.id}>
          {val.name}{val.age}
        </div>

      })}
      <button type="button" className="btn color ">Primary</button>

    </div>
  );
}

export default App;
