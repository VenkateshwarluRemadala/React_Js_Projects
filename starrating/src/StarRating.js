import React, { useState } from 'react';
import {FaStar} from "react-icons/fa";
function StarRating() {
    const [number, setnumber] = useState(2);
    let arr1 = [1,2,3,4,4,]
   const changeStar = (e,ind)=>{
            if(ind == 0){  
              setnumber(ind);
              console.log(number);
            }
            else if(ind == 1){
              setnumber(ind);
              console.log(number);
            }
            else if(ind == 2){
              setnumber(ind)
              console.log(number);
            }
            else if(ind == 3){
              setnumber(ind);
              console.log(number);
            }
            else if(ind == 4){
            setnumber(ind);
            console.log(number);
     }
    }  
    return (
        <div>
              <div>  
                 {
                  arr1.map((ele,index)=> 
                  <FaStar onClick={(e)=>{changeStar(e,index)}} color= {index<=number ? "blue": "red"} />)
                } 
            
              </div>   
        </div>
      )
}

export default StarRating
