import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function DivyaTask() {
    const [data, setdata] = useState([]);
    const [filterdData, setfilterdData] = useState([])
  useEffect(() => {
    axios.get("https://moviesdatabase.p.rapidapi.com/titles", {
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "9660b413dfmshb8cd5891a92620fp167591jsnc31c7cde8f5a",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    }).then((data)=>{
        // console.log(data.data, "venkateshwarlu");
        setdata([...data.data.results]);
        setfilterdData([...data.data.results])
        
    })
  }, []);
  const searchTitle = (data)=>{
       let val =  filterdData.filter(ele=>{
            return ele.titleText.text.toLowerCase().includes(data.toLowerCase())

        });
        setdata([...val])



  }
  return (
    <div>
        search your data by title text:<input type="text" onChange={(event)=>{searchTitle(event.target.value)}} />
        {
          data.length>0?data.map((ele, index)=>
        <div>
           <Card>
           <h1>{ele.titleText.text}</h1>
            {
                ele.primaryImage == null?  <h1>no image loaded</h1>:<img style = {{'height':ele.primaryImage.height,'width':ele.primaryImage.height}} src={ele.primaryImage.url} />
            }
           </Card><br></br><br></br><br></br>
        </div>
          ):null
        }
        

    </div>
  );
}

export default DivyaTask;
