import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VenkatMoreInfo from './VenkatMoreInfo';
import VinayMoreInfo from './VinayMoreInfo';
import KalyanMoreInfo from './KalyanMoreInfo';

function ShowingTheDataOnButtionCliked() {
    const navgate = useNavigate();
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [isshareFirstDFata, setIsshareFirstDFata] = useState(false);
    const [isshareSecondDFata, setIsshareSecondDFata] = useState(false);
    const [issharethirdFata, setIssharethirdDFata] = useState(false);
    let obj = {name:"venkat",
                age:20,
                phone:112333
}
    const [firstButtionData, setFirstButtionData] = useState(
        {
            name:"venkat",
            age:20,
            phone:99,
            moreInfo:<button onClick={()=>{
                // setIsshareFirstDFata(!isshareFirstDFata); 
                navgate('/venkat', {state:obj})
            }}>venkatMoreInfo</button>
        }
        
    );
    const [secondButtionData, setThirdButtionData] = useState(
        {
            name:"vinay",
            age:21,
            phone:100,
            moreInfo:<button onClick={()=>{
                setIsshareSecondDFata(!isshareSecondDFata); 
            }}>vinayMoreInfo</button>
        }
    );
    const [thirdButtionData, setSecondButtionData] = useState(
        {
            name:"kalyan",
            age:22,
            phone:101, 
            moreInfo:<button onClick={()=>{
                setIssharethirdDFata(!issharethirdFata); 
            }}>KalyanMoreInfo</button>
        }
    )

useEffect(()=>{

},[]);

console.log(first, isshareFirstDFata);
  return (
    <div>
        <button onClick={()=>{
            setIsshareFirstDFata(false);
            // setIsshareSecondDFata(false);
            // setIssharethirdDFata(false);
            setfirst(!first);
            // setsecond(false);
            // setthird(false);
        
            }}>firstButtion</button>
        <button onClick={()=>{
            setIsshareSecondDFata(false)
            setsecond(!second);
            // setfirst(false);
            // setthird(false);
            // setIsshareFirstDFata(false);
            // setIssharethirdDFata(false);
            }}>secondButtion</button>
        <button onClick={()=>{
            // setfirst(false);
            // setsecond(false)
            setIssharethirdDFata(false);
            // setIsshareSecondDFata(false)
            // setIsshareFirstDFata(false);
            setthird(!third)
            }}>thirdButtion</button>

        {
            first == true  ? Object.values(firstButtionData).map((ele, index)=>
            <h1 style={isshareFirstDFata == true ? {"display": "none"}:null} key={index}>{ele}</h1>
        ):null
        }
        {
            isshareFirstDFata == true?
            <VenkatMoreInfo data = {firstButtionData}/>:null
        }
        
        {
            second == true  ? Object.values(secondButtionData).map((ele, index)=>
            <h1 style={isshareSecondDFata == true ? {"display": "none"}:null} key={index}>{ele}</h1>
        ):null
        }
        {
            isshareSecondDFata == true?
            <VinayMoreInfo  data = {secondButtionData}/>:null
        }
        
        {
            third == true  ? Object.values(thirdButtionData).map((ele, index)=>
            <h1 style={issharethirdFata == true ? {"display": "none"}:null} key={index}>{ele}</h1>
        ):null
        }
        {
            issharethirdFata == true?
            <KalyanMoreInfo  data = {thirdButtionData}/>:null
        }
        
       
    </div>
  )
}

export default ShowingTheDataOnButtionCliked
