import FileSaver from 'file-saver';
import React, { useState } from 'react';
// import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style'

function DownloadXlBymanoj() {
    const [data, setdata] = useState([]);
    const [obj, setobj] = useState({});
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8"
    const submittData = ()=>{
        if(Object.values(obj).length == 3){
            data.push(obj);
            setdata([...data]);
            setobj({});
        }
    }
const convertoXl = (object)=>{
    const ws = XLSX.utils.json_to_sheet([object]);
    const wb = {Sheets:{"data":ws}, SheetNames:['data']};
    const excelBuffer = XLSX.write(wb, {bookType:'xlsx', type:'array'});
    const data = new Blob([excelBuffer],{type:fileType});
    FileSaver.saveAs(data,"Excel Export"+".xlsx")

}
  return (
    <div>
      <h1>xl download</h1>
    <input type='text' onChange={(e)=>{setobj({...obj, ...{name:e.target.value}})}}/>
    <input type='text' onChange={(e)=>{setobj({...obj, ...{age:e.target.value}})}}/>
    <input type='text' onChange={(e)=>{setobj({...obj, ...{phone:e.target.value}})}}/>
    <button onClick={submittData}>submitt</button>
   <table>
        {
             data.length>0?
             <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                </tr>
             </thead>:null
        }
        <tbody>
            {
                data.map((element, index)=>
                <tr>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                    <td>{element.phone}</td>
                    <td><button onClick={()=>{convertoXl(element)}} className='btn btn-primary'>xl download</button></td>
                </tr>
                )
            }
        </tbody>
   </table>
      
    </div>
  )
}

export default DownloadXlBymanoj
