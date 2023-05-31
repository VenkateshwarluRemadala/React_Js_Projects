// import React from 'react'

// function Data() {
//     let obj =[
//         {
//         "name":"venkat",
//         "age": 20,
//         "phone":994855,
//         "domain":"ui",
//         "strongAt":"javascript",
//         "weakIn":"angular",
//         "exp":1.6,
//         "package": 3.6,
//         "location": "hyd",
//         "permanentAddress": "Molapatnam",
//         "Mandal":"vemulapally",
//         "State":"Telangana"
//       },
//       {
//         "name":"vinay",
//         "age": 22,
//         "phone":9948,
//         "domain":"Angular",
//         "strongAt":"javascript",
//         "weakIn":"angular",
//         "exp":1.6,
//         "package": 3.6,
//         "location": "hyd",
//         "permanentAddress": "kothapet",
//         "Mandal":"vemulapally",
//         "State":"Telangana"
//       }
//     ]
// const [count, setcount] = useState(0);
// console.log(obj);
// // let count = 0;
// const changetData = (e1)=>{
//     if(e1.target){
//         setcount(1)
//         console.log(count);
//     }
// }
//   return (
//     <div>
//         <table class = "table table-bordered ">
//             <thead>  
//                         <tr>
//                             {
//                                 count >= 1 ?  obj.map(ele3=>Object.keys(ele3).map(ele4=><th>{ele4}</th>)) : <div class = "table table-bordered ">
//                                     <th>name</th>
//                                     <th>age</th>
//                                     <th>phone</th>
//                                     <th>domain</th>
//                                     <th>strongAt</th>
//                                 </div>
//                             }
//                         </tr>
//             </thead>
//             <tbody>
//                         <tr>
//                         { 
//                             count >= 1 ? obj.map(ele=>Object.values(ele).map(ele1=><td>{ele1}</td>)) : 
//                             <div >
//                             {obj.map(ele2=>
//                                 <div >
//                                     <td onMouseOver={(e)=>changetData(e)}>{ele2.name}</td>
//                                     <td onMouseOver={(e)=>changetData(e)}>{ele2.age}</td>
//                                     <td onMouseOver={(e)=>changetData(e)}>{ele2.phone}</td>
//                                     <td onMouseOver={(e)=>changetData(e)}>{ele2.domain}</td>
//                                     <td onMouseOver={(e)=>changetData(e)}>{ele2.strongAt}</td>
//                                 </div>
//                                     )}
//                            </div>
//                         }
//                         </tr>
//             </tbody>
//         </table>      
//     </div>
//   )
// }


// export default Data




//  <Modal show={show} onHide={handleClose}>
// <Modal.Header closeButton>
//   <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>
   
//    name:<h6>{objs.name}</h6>
//    age:<h6>{objs.age}</h6>
//    phone:<h6>{objs.phone}</h6>
//    domain:<h6>{objs.domain}</h6>
//    strongAt:<h6>{objs.strongAt}</h6>
//    weakIn:<h6>{objs.weakIn}</h6>
//    exp:<h6>{objs.exp}</h6>
//    package:<h6>{objs.package}</h6>
//    location:<h6>{objs.location}</h6>
//    permanentAddress:<h6>{objs.permanentAddress}</h6>phone:<h6>{}</h6>
//    Mandal:<h6>{objs.Mandal}</h6>
//    state:<h6>{objs.State}</h6>
// </Modal.Body>
// </Modal>     



//  <table class = "table table-bordered ">
//             <thead>  
//                         <tr>  
//                                <div>
//                                     <th>name</th>
//                                     <th>age</th>
//                                     <th>phone</th>
//                                     <th>domain</th>
//                                     <th>strongAt</th>
//                                 </div>  
//                         </tr>
//             </thead>
//             <tbody>
//                         <tr>
//                             {obj.map(ele2=>
//                                     <div>
//                                     <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.name}</td>
//                                     <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.age}</td>
//                                     <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.phone}</td>
//                                     <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.domain}</td>
//                                     <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.strongAt}</td>
//                                     </div>
//                                     )}
//                         </tr>
//             </tbody>
//         </table>   
