import React, { useEffect, useState } from 'react'

function TestObj() {
   
// let string = 4
const string = ()=>{

}

let number1 = 2
let str2 = ""
for(let i=0; i<number1; i++){
   str2 = str2+ String(Math.random(i))[2]; 
}
number1 = +str2;
// console.log(str2);
// console.log(Stringnumber);
const obj1 = {
  "createdBy": string, //string   
  "location": "Hyderabad",//string  
  "minExp": number1,//number  
  "maxExp": number1,//number , 
  "customerName": string,//string  
  "customerDetails": string,//string 
  "budget": number1,//number   
  "primarySkills": string,//string
  "secondarySkills": string,//string  
  "jobDescription": string,//string   
  "openPositions": number1,//number   
  "closedPositions": 3,//number    
  "hiringObjective": "Some objective",
  "hiringType": "hiretype",
  "interviewModes": "interviewmode",
  "jobTitle": "jobtitle",
  "jobLevel": "jobLevel",
  "visibility": 1
}
console.log(obj1, "new test object");
const postData = ()=>{
    console.log(obj1);
}




  return (
    <div>
        {/* <input type="number" onChange={(e)=>{setStringnumber(e.target.value)}}></input> */}

       <button onClick={()=>{postData()}}>postData</button>
    </div>
  )
}

export default TestObj
