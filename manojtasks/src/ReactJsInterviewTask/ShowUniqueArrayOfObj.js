import React, { useEffect, useState } from 'react';

function ShowUniqueArrayOfObj() {
    const [arryOfObj, setarrayOfObj] = useState([
        {
            id:1, username:"venkat"
        },
        {
            id:2, username:"vinay"
        },
        {
            id:2, username:"kalyan"
        },
        {
            id:3, username:"venkatesh"
        },
        {
            id:3, username:"pavitra"
        },
        {
            id:3, username:"sravani"
        },
        {
            id:4, username:"mouli"
        }
    ]);


useEffect(()=>{
    for(let i=0; i<arryOfObj.length; i++){
       arryOfObj[i].id =  arryOfObj[i].id+i+1;
    }
    setarrayOfObj([...arryOfObj])

},[]);

  return (
    <div>
      {
        arryOfObj.map(ele=><h1>{ele.id}, {ele.username}</h1>)
      }
    </div>
  )
}

export default ShowUniqueArrayOfObj
