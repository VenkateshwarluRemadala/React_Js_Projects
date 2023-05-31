import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
function App() {
  const [arr, setArr ]= useState(["hyd", "Miryalaguda", "nalgonda"]);
  const [secondDropdowncites, setsecondDropDown] = useState(["hyd", "Miryalaguda", "nalgonda"]);
  const [selectedValue, setSelectedValue] = '';
  const [jsonData, setJsonData] = useState([]);

let api = "https://jsonplaceholder.typicode.com/posts";
React.useEffect(()=>{axios.get(api).then((res)=>{
    setJsonData(res.data)
})},[])
  const onNumbersChange = (e,a)=>{
    if(a == "name"){
      // console.log(e.target.value);
    }
  }

  
 
 


  return (
    <div className="App">
      
        <input type="text" >Seach</input>
        {/* <select>
          {arr.map(ele=><option>{ele}</option>)}
        </select>
        <select>
          {secondDropdowncites.map(ele1=><option>{ele1}</option>)}
        </select>
        <select>
          {jsonData.map(ele2=><option>{ele2.id}</option>)}
        </select> */}
        <table className='table table-striped table-bordered table-hover table-responsive'>
          <thead>
            <tr>
            <th>userId</th>
            <th>id </th>
            <th>title</th>
            <th>body</th>
            </tr>
          </thead>
          {
             jsonData.map((ele)=>{
              return(
                <tbody>
                  <tr>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
                  </tr>
                </tbody>
              )
             })
          }
        </table>
        {/* <DropDown
          options={names}
          selectedValue={selectedName}
          onChange={this.onNamesChange}
          disabled={selectedNumber == 3} // this will be disabled if selected value of the first dropdown is 3
        /> */}

    </div>
  );
}

export default App;
