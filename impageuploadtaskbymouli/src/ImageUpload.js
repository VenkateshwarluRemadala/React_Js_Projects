import React, { useEffect, useState } from 'react';
import {FaStar} from "react-icons/fa"

function ImageUpload() {
    // const [image, setimage] = useState();
    const [name,setName]=useState('')
    const [age, setage]=useState()
    const [phone, setphone]=useState()
    const [id, setid]=useState();
    // const [obj, setobj] = useState({name:'',age:"",phone:"",id:0});
    const[count, setcount] = useState(0);
    const[index1, setIndex] = useState(0);
    const[arr, setarr] = useState([
      {
        name:"venkat",
        age:"20",
        phone:"9948",
        id:1
      }
      // {
      //   name:"vinay",
      //   age:"30",
      //   phone:"994855",
      //   id:2
      // }
     
    ])
    useEffect(()=>{

    },[])

    const nameChange =(e,val,index)=>{;
      setcount(1);
      setIndex(index);
      // setobj({...obj, name:e,age:e1,phone:e2,id:e3});
      if(val == "name"){
        setName(e);
      }else if(val == "age"){
        setage(e);
      }else if(val == "phone"){
      setphone(e);
      }
      else if(val == "id"){
      setid(e);
      }
    }
   const updateobj = ()=>{
    // console.log("hello");
    arr.map((ele,ind)=>{
      if(ind == index1){
        ele.name = name;
        ele.age = age;
        ele.phone = phone;
        ele.id = id;
        
      }
    })
    setarr([...arr]); 
    
   }
   console.log(arr);
  
  return (
    <div>
          {/* <input type="file"  onChange={(e)=>setimage(URL.createObjectURL(e.target.files[0]))}/>
          <img src={image}></img> */}
          <table>
           <tbody>
           {arr.map((ele,index)=> <tr>
            <td><input type="text" value={count === 1 && index == index1  ? name : ele.name } onChange={(e)=>nameChange(e.target.value,"name", index)}/> <input type="text" value={count === 1 && index == index1  ? age : ele.age } onChange={(e)=>nameChange(e.target.value,"age", index)}/><input type="text" value={count === 1 && index == index1  ? phone : ele.phone } onChange={(e)=>nameChange(e.target.value,"phone", index)}/><input type="text" value={count === 1 && index == index1  ? id : ele.id } onChange={(e)=>nameChange(e.target.value,"id", index)}/> <button onClick={()=>updateobj()}>Update</button></td>
           </tr>)}
           </tbody>
          </table>
          
          
   
    </div>
  )
}

export default ImageUpload
