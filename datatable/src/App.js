import { useState } from 'react';
import './App.css';
function App() {
  const [data, setdata] = useState(
    [
      {
        name:"venkat",
        age:25,
        phone:12323
      },
      {
        name:"vinay",
        age:24,
        phone:1232222
      },
      {
        name:"vamshi",
        age:23,
        phone:12321
      },
      {
        name:"srikanth",
        age:21,
        phone:123567
      },
      {
        name:"rajitha",
        age:22,
        phone:12345
      }
    ]
  );
  const [search, setsearch] = useState('');
  return (
    <div className="App">
      {/* <h3>hello</h3> */}
      <input type="text" onChange={(e)=>{setsearch(e.target.value)}}/>
      {
        data.filter(ele=>{
         if(search == ""){
            return ele.name
          }else if(search){
            return ele.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map(ele=><h1>{ele.name}</h1>)
      }
    </div>
  );
}

export default App;
