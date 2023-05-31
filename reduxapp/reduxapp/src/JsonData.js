import React, { useEffect, useState } from 'react';
import { getData } from './Action';
import { useDispatch } from 'react-redux';

function JsonData() {
    const dispatch = useDispatch();
    const [data, setdata] = useState([]);
    const [obj, setobj] = useState({});
 
    const submitDta = ()=>{
        // console.log(obj, "venkateshcdsf");
        data.push(obj);
        setdata([...data])
        // data.push(obj);
        // setdata([...data]);
        // setobj({});
        dispatch(getData(data))
        // setobj({});
    }

    
// console.log(jasonData);

  return (
    <div>
        <input type='text' onChange={(e)=>{setobj({...obj, ...{name:e.target.value}})}}/>
        <input type='text' onChange={(e)=>{setobj({...obj, ...{age:e.target.value}})}}/>
        <input type='text' onChange={(e)=>{setobj({...obj, ...{phone:e.target.value}})}}/>
        <button onClick={submitDta}>submitData</button>
      
    </div>
  )
}

export default JsonData
