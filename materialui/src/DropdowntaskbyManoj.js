import React, { useEffect, useState } from 'react'

function DropdowntaskbyManoj() {
    const [status, setstatus] = useState(false);
    const [data, setdata] = useState(
      [
        {
          name:"venkat",
          age:"20",
          phone:"9948"
        },
        {
          name:"aravind",
          age:"34",
          phone:"7766"
        },
        {
          name:"kalyn",
          age:"21",
          phone:"3344"
        },
        {
          name:"vinay",
          age:"24",
          phone:"1122"
        }
      ]
    )
    const namesArray = []
    const ageArray = []
    const phonesArray = []
    // namesArray.push(1);
    data.map((ele,ind)=>{
     for(let i in ele){
      if(i == "name"){
        namesArray.push(ele[i])
      }else if(i == "age"){
        ageArray.push(ele[i])
      }else if(i == "phone"){
        phonesArray.push(ele[i])
      }
     }
    })
  
    const[obj, setobj] = useState({"name":"", "age":"", "phone":""})
    const filterData = ()=>{
      console.log(obj);
      data.filter((ele)=>{
         if(obj.name == ele.name  && obj.age == ele.age && obj.phone == ele.phone){
           setdata([...[ele]])
         }
         
      });
      
      // console.log(data, "venkateshwarlu");
      console.log(namesArray);
      console.log(ageArray);
      console.log(phonesArray);

    }
  return (
    <div>
    <select onChange={(e)=>{setobj({...obj, name:e.target.value})}}>
      {
        namesArray.map((ele,ind)=><option value={ele}>{ele}</option>)
      }
    </select>
    <select onChange={(e)=>{setobj({...obj, age:e.target.value})}}>
      {
        ageArray.map((ele,ind)=><option value={ele}>{ele}</option>)
      }
    </select>
    <select onChange={(e)=>{setobj({...obj, phone:e.target.value})}}>
      {
        phonesArray.map((ele,ind)=><option value={ele}>{ele}</option>)
      }
    </select>
    <button onClick={filterData}>FilterTheTable</button>
   
      <table>
        <thead>
          <th>name</th>
          <th>age</th>
          <th>phone</th>
        </thead>
        <tbody>
          {
            data.map((ele,ind)=>
            <tr>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.phone}</td>
            </tr>
            )
          }
        </tbody>

      </table>
    </div>
  )
}

export default DropdowntaskbyManoj
