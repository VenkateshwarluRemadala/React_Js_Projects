import React, { useState } from 'react'

function InterviewProblem() {
    const [countries, setCountries] = useState(
        [
        {
            "country":"India",
            "code" : "Ind",
            "cities" :[
                "Delhi", "mumbai"
            ]
        },
        {
            "country":"Pakistan",
            "code" : "Pk",
            "cities" :[
                "Lahore", "Musarabad"
            ]
        },
        {
            "country":"bangladesh",
            "code" : "bn",
            "cities" :[
                "chittagang", "Dhaka"
            ]
        }
    ]);
    const [citiesDropDown, setCitiesEDropdown] = useState();
    const getIndex = (e)=>{
        countries.forEach((ele,index)=>{
            if(index == e.target.value){
                setCitiesEDropdown(ele.cities)
            }
        });
    };
    console.log(citiesDropDown);
  return (
    <div>
        <select onChange={getIndex}>
            {
                countries.map((ele, index)=>
                < option value={index} key={index}>
                    {ele.country}
                </option>
                )
            }
        </select>
        {
            citiesDropDown && citiesDropDown ? <select>
                {
                    citiesDropDown.map(ele=><option>{ele}</option>)
                }

            </select>:null
        }

      
    </div>
  )
}

export default InterviewProblem
