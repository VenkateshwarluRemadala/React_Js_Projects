import React, { useState } from 'react'

function SorttableDataByIdByName() {
    const[arr, setarr] = useState([
        {
            name:"venkat",
            age:10,
            country:"India"
        },
          {
            name:"raju",
            age:13,
            country:"rajamundry"
        },
          {
            name:"kalyan",
            age:12,
            country:"france"
        },
          {
            name:"naga",
            age:40,
            country:"vemulapally"
        },
          {
            name:"bablu",
            age:30,
            country:"Molkapatnam"
        },
          {
            name:"vinay",
            age:20,
            country:"russia"
        }
    ]);
    const[obj, setobj] = useState({count:0, count1:0, count2:0})
    const sortArray = ()=>{
        obj["count"] = (obj["count"] || 0)+1;
        setobj({...obj});
        console.log(obj.count, "count");
        if(obj["count"]%2 == 0){
            arr.sort((a,b)=>{
                return b.age-a.age;
            });
            setarr([...arr])
        }
        else if(obj["count"]%2 == 1){
            arr.sort((a,b)=>{
                return a.age-b.age;
            });
            setarr([...arr])
        }
    }
    const sortArrayByName = ()=>{

        obj["count1"] = (obj["count1"] || 0)+1;
        setobj({...obj});
        console.log(obj.count, "count1");
        if(obj["count1"]%2 == 0){
            arr.sort((a,b)=>
                // return b.name-a.name;
                a.name.localeCompare(b.name)
            );
            setarr([...arr])
        }
        else if(obj["count1"]%2 == 1){
            arr.sort((a,b)=>
                b.name.localeCompare(a.name)
            );
            setarr([...arr])
        }
    }
    const sortArrayByCountry = ()=>{
        obj["count2"] = (obj["count2"] || 0)+1;
        setobj({...obj});
        console.log(obj.count, "count2");
        if(obj["count2"]%2 == 0){
            arr.sort((a,b)=>
                // return b.name-a.name;
                a.country.localeCompare(b.country)
            );
            setarr([...arr])
        }
        else if(obj["count2"]%2 == 1){
            arr.sort((a,b)=>
                b.country.localeCompare(a.country)
            );
            setarr([...arr])
        }
        
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>age</th><button onClick={()=>{sortArray()}}>SortByAge</button>
                    <th>name</th><button onClick={()=>{sortArrayByName()}}>SortByName</button>
                    <th>country</th><button onClick={()=>{sortArrayByCountry()}}>SortByCountryName</button>
                </tr>
            </thead>
            <tbody>
                {
                   arr.map(ele=>
                  <tr>
                     <td>{ele.age}</td>
                     <td>{ele.name}</td>
                      <td>{ele.country}</td>
                  </tr>
                   )
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default SorttableDataByIdByName
