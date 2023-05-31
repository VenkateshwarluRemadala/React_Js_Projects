import { useState } from 'react';
import './App.css';
function App() {
  const [data, setdata] = useState([]);
  const [inputData, setInputData] = useState('');
  const [tagetval, settargetval] = useState(false);
  const [index, setIndex] = useState()
  const addInputData = ()=>{
    if(data.indexOf(inputData) == -1 && inputData !=''){
        data.push(inputData);
        setdata([...data])
    }else{
      alert("duplicate data is not allowed")
    }
    
  }

  const deleteInputField = (index)=>{
    console.log(index, "indexValue");
     data.splice(index,1);
    
      setdata([...data]);
  }
  return (
    <div className="App">
      {
        data && data.map((ele, index)=>
            <div >
              <input type='text' value={ele} onChange={()=>{}}/>
              <button onClick={()=>{deleteInputField(index)}}>x</button>
            </div>
        )
      }
     
      <input type='text' onChange={(e)=>{setInputData(e.target.value)}}/>
      <button onClick={addInputData}>addInput</button>
      
    </div>
  );
}

export default App;
