import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const[childDatas, setChildData] = useState([]);
    const [selectedRowIndex, setSelectedRowIndex] = useState();
    const [headerName, setHeaderName] = useState();
    const [listOfHeaders, setListOfHeaders] = useState([])
    const ParentFunction = (childData, headersList)=>{
        setChildData(childData);
        setListOfHeaders([...headersList]);
    }
    console.log(childDatas, "venkatffdgrgfg");
    const getClikedRow = (headerName, index)=>{
        setSelectedRowIndex(index);
        setHeaderName(headerName);
        
        let val = []
        if(childDatas.length>0){
            childDatas.map((ele, indexd)=>{
                let obj = {};
                for(let j in ele){
                    if(j !=headerName){
                        obj[j] =ele[j]
                    }
                }
                val.push(obj);
            }) ;
        }
        setChildData([...val])
    }
  return (
    <div>
      <Child sendFunction = {ParentFunction} rowIndex = {headerName}/>
      <table>
        <thead>
            {
                childDatas.length>0 ? 
                listOfHeaders.length>0 && listOfHeaders.map((ele, index)=>
                        <>
                             <th>{ele}</th><button onClick={()=>{getClikedRow(ele, index)}}>x</button>
                        </>
                ) : null
            }
        </thead>
        <tbody>
            {
               childDatas && childDatas.map((ele,index)=>
                   <tr key={index}>
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

export default Parent
