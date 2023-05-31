import React, { useState } from 'react'

function WritingFilterFunction() {
    const[data, setdata] = useState(
        [
            { "id":1,"name": "John", "age": "22", "date":"20-10-2020" },
            { "id":2,"name": "PeteJr", "age": "201", "date":"20-10-2020"},
            { "id":3,"name": "Mark", "age": "23", "date":"20-10-2020"},
            { "id":1,"name": "John", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "venkaja", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "ramanjdfsdf", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "ramanjdfsdf", "age": "10", "date":"20-10-2020" }
        ]);
    const [name, setname] =useState({named:""});
    const [filterData, setfilterData] = useState([]);
    const[str, setstr] = useState({str1:"", str2:""});
    // const[str1, setstr1] = useState('');
    const filtertheArrayOfObject = (arg)=>{
        name.named = arg;
        setname({...name})
        console.log("venkat");
        console.log(name, typeof name, +name, typeof +name);
        if(+name.named){
           data.filter((ele,ind)=>{
                ele.age.split('').forEach((ele1,ind1)=>{
                    str.str1 = str.str1 + ele1
                    setstr({...str})
                    name.named.split('').forEach((ele2,ind2)=>{
                        str.str2 = str.str2 + ele2
                        setstr({...str});
                        console.log(str, "venkatesh");
                        if(ind1 === ind2 && str.str1 === str.str2){
                            // setdata([...[ele]])
                            setfilterData([...[ele]])
                        }
                    })
                })
            })
            // console.log(filterData, "venkateshwarlu");
            // setfilterData([...data])
        }else if(typeof name == "string"){
            // console.log("amma");
        }
        // data.filter((ele,index)=>{
        //     console.log(ele.name);
        // })
       
    }
  return (
    <div>
      <input type="text" onChange={(e)=>{filtertheArrayOfObject(e.target.value)}}/>
      {/* <button onClick={filtertheArrayOfObject}>doTheFilter</button> */}
    </div>
  )
}

export default WritingFilterFunction
