import React, { useState } from 'react'

function Show() {
    const [data, setData] = useState({name:'', age:"", phone:''});
    const [final, setfinal] = useState([]);
    const [obj, setobj] = useState({name:false, age:false, phone:false})
    const[updateobj, setupdateobj] = useState({name:'', age:"", phone:''});
    // const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [phone, setphone] = useState('')

    const getName = (e1,prop)=>{
        if(prop == "name"){
            obj.name = false;
            data.name = e1;
        }else if(prop == "age"){
            obj.age = false
            data.age = e1;
        }else if(prop == "phone"){
            obj.phone = false;
            data.phone = e1;
        }
        setobj({...obj})
    }
    const getData = ()=>{
        obj.name= true
        obj.age=true;
        obj.phone=true;
        setobj({...obj})
        setData({...data})
        final.push(data);
        setfinal([...final]);
    }
    const editobj = (a,b)=>{
        
      updateobj.name = a.name;
      updateobj.age = a.age;
      updateobj.phone = a.phone;
      setupdateobj({...updateobj})
        // // setupdateobj(a)
        // setname(name)
    }
    const updatetheObj = ()=>{
        console.log(updateobj);
    }
  return (
    <div>
        <input type="text" value={obj.name == true ?'':data.name} onChange={(e)=>{getName(e.target.value, "name")}}/>
        <input type="text" value={obj.age == true ?'':data.age} onChange={(e1)=>{getName(e1.target.value, "age")}}/>
        <input type="text" value={obj.phone == true ?'':data.phone} onChange={(e2)=>{getName(e2.target.value, "phone")}}/>
        <button onClick={()=>{getData()}}>getData</button>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
               {
                final && final.map((ele,ind)=>
                    <tr key={ind}>
                    <td >{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.phone}</td><button onClick={()=>{editobj(ele,ind)}}>edit</button>
                </tr>
                )
               }
            </tbody>
        </table>
        <input type="text" value={updateobj.name} onChange ={(e)=>{setupdateobj({...updateobj, name:e.target.value})}}/>
        <input type="text" value={updateobj.age} onChange ={(e1)=>{setupdateobj({...updateobj,age:e1.target.value})}} />
        <input type="text" value={updateobj.phone} onChange ={(e2)=>{setupdateobj({...updateobj,phone:e2.target.value})}}/>
        <button onClick={()=>{updatetheObj()}}>update</button>
    </div>
  )
}

export default Show
