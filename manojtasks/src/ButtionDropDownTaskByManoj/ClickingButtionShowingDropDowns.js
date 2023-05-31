import React, { useEffect, useState } from 'react'

function ClickingButtionShowingDropDowns() {
    const[disply, setDisplay] = useState(false);
    const [openFourDrop, setOpenFourDrop] = useState(false);
    const [firstDropDown, setFirtsDropDown] = useState(["aravind", "nagaraju", "venu"]);
    const [secondDropDown, setSecondDropDown] = useState(["raju", "siva", "durga"]);
    const [thirdDropDown, setThirdDropDown] = useState(["venkat", "viny", "ram"]);
    const [fourthDropDown, setFourthDropDown] = useState(["chandra", "shankar", "manoj"]);
    const [selectDopDownValueObj, setSelectDopDownValueObj] = useState({"firstDropDownValue":"", "secondDropDownValue":"", "thirdDropDownValue":"", "fourthDropDownValue":""});
    const [tableArray, setTableArray] = useState([]);
    const [error, setError] = useState(false)
    useEffect(()=>{

    },[])
    const getVal = (value)=>{
        setError(false)
        if(value == "yes"){
            setOpenFourDrop(true)
        }else if(value == "no"){
            setOpenFourDrop(false);
        }
    }
  
    const getSelectedDropDownValues = ()=>{
        if(selectDopDownValueObj.firstDropDownValue&& selectDopDownValueObj.secondDropDownValue&&selectDopDownValueObj.thirdDropDownValue&&selectDopDownValueObj.fourthDropDownValue){
            tableArray.push(selectDopDownValueObj);
            setTableArray([...tableArray])
            setSelectDopDownValueObj({"firstDropDownValue":"", "secondDropDownValue":"", "thirdDropDownValue":"", "fourthDropDownValue":""});
            setOpenFourDrop(false);
            console.log("hello");
            console.log(selectDopDownValueObj);
        }else{
            setError(true);
            console.log("world");
        }
       
    }
  return (
    <div>
      <button onClick={()=>{setDisplay(true)}}>showDropDowns</button>
      {
        disply == true ? <select onChange={(e)=>{getVal(e.target.value)}}>
            <option>select</option>
            <option value="yes">yes</option>
            <option value = "no">no</option>
        </select>:null
      }
      {
        openFourDrop == true ?
        <select style={error == true && selectDopDownValueObj.firstDropDownValue.length == 0 ? {"border":"1px solid red"}:{"border":"1px solid black"}} onChange={(e)=>{
            e.target.value == "select" ? setSelectDopDownValueObj({...selectDopDownValueObj, ...{firstDropDownValue:""}}):setSelectDopDownValueObj({...selectDopDownValueObj, ...{firstDropDownValue:e.target.value}})
            }}>
            <option>select</option>
            
            {
                firstDropDown.map(ele=><option value={ele}>{ele}</option>)
            }
        </select>:null
      }
      {
        openFourDrop == true ?
        <select style={error == true && selectDopDownValueObj.secondDropDownValue.length == 0 ? {"border":"1px solid red"}:{"border":"1px solid black"}} onChange={(e)=>{
            e.target.value == "select" ? setSelectDopDownValueObj({...selectDopDownValueObj, ...{secondDropDownValue:""}}):setSelectDopDownValueObj({...selectDopDownValueObj, ...{secondDropDownValue:e.target.value}})
            }}>
            <option>select</option>
            {
                secondDropDown.map(ele=><option value={ele}>{ele}</option>)
            }
        </select>:null
      }
      {
        openFourDrop == true ?
        <select style={error == true && selectDopDownValueObj.thirdDropDownValue.length == 0 ? {"border":"1px solid red"}:{"border":"1px solid black"}} onChange={(e)=>{
            e.target.value == "select" ? setSelectDopDownValueObj({...selectDopDownValueObj, ...{thirdDropDownValue:""}}):setSelectDopDownValueObj({...selectDopDownValueObj, ...{thirdDropDownValue:e.target.value}})
        }}>
            <option>select</option>
            {
                thirdDropDown.map(ele=><option value={ele}>{ele}</option>)
            }
        </select>:null
      }
      {
        openFourDrop == true ?
        <select style={error == true && selectDopDownValueObj.fourthDropDownValue.length == 0 ? {"border":"1px solid red"}:{"border":"1px solid black"}} onChange={(e)=>{
            e.target.value == "select" ? setSelectDopDownValueObj({...selectDopDownValueObj, ...{fourthDropDownValue:""}}):setSelectDopDownValueObj({...selectDopDownValueObj, ...{fourthDropDownValue:e.target.value}})
        }}>
            <option>select</option>
            {
                fourthDropDown.map(ele=><option value={ele}>{ele}</option>)
            }
        </select>:null
      }

      {
        openFourDrop == true? <button onClick={getSelectedDropDownValues}>submit</button>:null
      }
    {

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
            tableArray.map((ele, index)=>
            <tr key={index}>
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

export default ClickingButtionShowingDropDowns
