import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Table from './Table';

function App() {
  const[name, setName] = useState('');
  const[age, setAge] = useState(0);
  const[salary, setSal] = useState(0);
  const[employeeData, setEmployeeData] = useState([]);
 const handleOnChange = (e,Name,Age, Sal)=>{
    if(Name === 'name'){
      setName(e.target.value)
    }else if(Age=== "age"){
      setAge(e.target.value);
     
    }
    else if(Sal === "sal"){
      setSal(e.target.value);
    }
 }
  
  return (
    <div className="App">
      {console.log(employeeData)}
      <input type = 'text' onChange= { (ele)=>handleOnChange(ele, 'name')} ></input>
      <input type = 'number' onChange = {(ele)=>handleOnChange(ele, 'age')}></input>
      <input type= 'number'  onChange={(ele)=>handleOnChange(ele, 'sal')}></input>
      <button onClick= {()=>setEmployeeData([{name, age, salary}])}>submit</button>
      {/* {employeeData.map((ele)=>{ setObj[ele] = ele })} */}
      <Table data = {employeeData}/>
    </div>
    
  );
}

export default App;
