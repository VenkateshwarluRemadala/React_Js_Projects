import React, { useEffect, useState } from 'react'

function ButtionDropDownTaskByManoj() {
    const [firstDropDown, setfirtsDropDown] = useState([["aravind", "nagaraju", "venu"], ["raju", "siva", "durga"], ["venkat", "viny", "ram"], ["chandra", "shankar", "manoj"]]);
    const [openDropDowns, setopenDropDowns] = useState(["yes", "no"])
    const [display, setDisplay] = useState(false);
    const [DisplayFourDrop, setDisplayFourDrop] = useState(false);
    const [tableArray, setTableArray] = useState([])
    const [selectedValues, setSelectedValues] = useState({});
    const [firstError, setfirstError] = useState();
    const [secondError, setsecondError] = useState();
    const [thirdError, setthirdError] = useState();
    const [fourthError, setFourthError] = useState();
    const [error, seterror] = useState(false);
    useEffect(()=>{


    },[error])

    const getval = (val)=>{

        if(val == "yes"){
            setDisplayFourDrop(true);
            seterror(false)
        }else if(val == "no"){
            setDisplayFourDrop(false);
            seterror(false)
        }
    }
    const getselectedValue = (value, index)=>{
        
        if(index == 0){
            setSelectedValues({...selectedValues, ...{firstDropDownValue: value}})
            setfirstError(index)
        }else if(index == 1){
            setSelectedValues({...selectedValues, ...{secondDropDownValue: value}})
            setsecondError(index)
        }else if(index == 2){
            setSelectedValues({...selectedValues, ...{thirdDropDownValue: value}});
            setthirdError(index)
        }else if(index == 3){
            setSelectedValues({...selectedValues, ...{fourthDropDownValue: value}});
            setFourthError(index);

        }
        
    }
    const submitSelectedValues = ()=>{
        seterror(true)
        tableArray.push(selectedValues);
        setTableArray([...tableArray]);
        setSelectedValues({})
        console.log(tableArray);
    // setDisplayFourDrop(false)
        setDisplay(false);
        
    }
  return (
    <div>
      <button onClick={()=>{setDisplay(true)}}>openDropDown</button>
    {
        display == true ?
            <select onChange={(e)=>{getval(e.target.value)}} >
           <option>--select--</option>
           {
                openDropDowns.map(ele=>
                    <option value={ele}>{ele}</option>
                    )
            }
            </select>
        :null
    }

    {
        DisplayFourDrop == true ? 
         firstDropDown.map((ele, index)=>

            error == true && index!=firstError?
            
                   <div style={{"backgroundColor":"red"}} >
                         <select onChange={(e)=>{getselectedValue(e.target.value, index)}} >
                    <option>--select</option>
                {
                
                    ele.map(ele1=>
                        
                        <option value={ele1}>{ele1}</option>
                        )
                }
                    </select>
                    </div>
            :error == true && index!=secondError?
                    <div style={{"color":"red"}}>
                          <select onChange={(e)=>{getselectedValue(e.target.value, index)}}>
                     <option>--select</option>
                 {
                     ele.map(ele1=>
                         <option value={ele1}>{ele1}</option>
                         )
                 }
                     </select>
                     </div>
                 :error == true && index!=thirdError?
                    <div style={{"color":"red"}}>
                          <select onChange={(e)=>{getselectedValue(e.target.value, index)}}>
                     <option>--select</option>
                 {
                     ele.map(ele1=>
                         <option value={ele1}>{ele1}</option>
                         )
                 }
                     </select>
                     </div>
                 :error == true && index!=fourthError?
                    <div style={{"color":"red"}}>
                          <select onChange={(e)=>{getselectedValue(e.target.value, index)}}>
                     <option>--select</option>
                 {
                     ele.map(ele1=>
                         <option value={ele1}>{ele1}</option>
                         )
                 }
                     </select>
                     </div>
                 :<select onChange={(e)=>{getselectedValue(e.target.value, index)}}>
                         <option>--select</option>
                     {
                         ele.map(ele1=>
                             <option value={ele1}>{ele1}</option>
                             )
                     }
                         </select>
                 
            
            )
       :null
    }
    {
        DisplayFourDrop == true ?  <button onClick={submitSelectedValues}>submit</button>:null
    }
   <table>
    <thead>
        {
            tableArray.length>0?
            <tr>
                <th>firstDropDownValue</th>
                <th>secondDropDownValue</th>
                <th>thirdDropDownValue</th>
                <th>fourthDropDownValue</th>
            </tr>:null
        }
    </thead>
    <tbody>
        {
            tableArray.map(ele=>
                <tr>
                    <td>{ele.firstDropDownValue}</td>
                    <td>{ele.secondDropDownValue}</td>
                    <td>{ele.thirdDropDownValue}</td>
                    <td>{ele.fourthDropDownValue}</td>
                </tr>
                )
        }
    </tbody>
   </table>

      
    </div>
  )
}

export default ButtionDropDownTaskByManoj
