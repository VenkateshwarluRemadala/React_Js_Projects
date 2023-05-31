import React, { useState } from 'react';
import {FaStar} from "react-icons/fa";
function IndividualStarSelection() {
    const[color, setcolor] = useState(false);
    const[color1, setcolor1] = useState(false);
    const[color2, setcolor2] = useState(false);
    const[color3, setcolor3] = useState(false);
    const[color4, setcolor4] = useState(false);
    const[number, setnumber] = useState(3);
    const changeStar = (e,ind)=>{
    if(ind == 0){        
        
        setcolor(true);
        if(color == true){
          console.log("hello");
          e.target.style.color = "blue";
          setcolor(false)
        }else if(color == false){
          console.log("wolrd");
          e.target.style.color = "red";
         
        }
      }
      else if(ind == 1){
        
        setcolor1(true);
        if(color1 == true){
          console.log("hello");
          e.target.style.color = "blue";
          setcolor1(false)
        }else if(color1 == false){
          console.log("wolrd");
          e.target.style.color = "red";
         
        }
      }
      else if(ind == 2){
        
        setcolor2(true);
        if(color2 == true){
          console.log("hello",ind);
          e.target.style.color = "blue";
          setcolor2(false)
        }else if(color2 == false){
          console.log("wolrd", ind);
          e.target.style.color = "red";
         
        }
      }
      else if(ind == 3){
       
        setcolor3(true);
        if(color3 == true){
          console.log("hello",ind);
          e.target.style.color = "blue";
          setcolor3(false)
        }else if(color3 == false){
          console.log("wolrd", ind);
          e.target.style.color = "red";
         
        }
      }
      else if(ind == 4){
    
        setcolor4(true);
        if(color4 == true){
          console.log("hello",ind);
          e.target.style.color = "blue";
          setcolor4(false)
        }else if(color4 == false){
          console.log("wolrd", ind);
          e.target.style.color = "red";
         
        }
      }
}  

let arr1 = [1,2,3,4,4,];
  return (
    <div>
            
             {
              arr1.map((ele,index)=> 
              <FaStar onClick={(e)=>{changeStar(e,index)}} color= {index<=number ? "blue": "red"} />)
            } 
        
          </div>   
  )
}

export default IndividualStarSelection
