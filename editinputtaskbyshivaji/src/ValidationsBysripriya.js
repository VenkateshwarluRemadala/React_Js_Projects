// import React, { useEffect, useState } from 'react'

// function ValidationsBysripriya() {
//     const [obj, setobj] = useState({name:"", age:"", phone:""});
//     const getValue = (e,a)=>{
//         if(a == "name"){
//           obj.name = e
//         }else if(a== "age" ){
//             obj.age = e
//         }else if(a == "phone"){
//           obj.phone = e
//         }
//         setobj({...obj})
//     }
//     console.log(obj);
//     const subimit = ()=>{
//         console.log("hello");
//     }
 
//   return (
//     <div>
//       <input type= "text" onChange={(e1)=>{getValue(e1.target.value, "name")}}/>
//       <input type= "text" onChange={(e2)=>{getValue(e2.target.value, "age")}}/>
//       <input type= "text" onChange={(e3)=>{getValue(e3.target.value, "phone")}}/>
//       <button   onClick={subimit} disabled = {obj.name.length == 0 || obj.age.length == 0 || obj.phone.length == 0 ? true :false} >submitt</button>
//     </div>
//   )
// }

// export default ValidationsBysripriya
