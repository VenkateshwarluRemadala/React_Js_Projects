import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ShowAddedproducts() {
    const navigation = useNavigate()
    const getItems = useLocation();
    const [displayslectedItems, setDisplayslectedItems] = useState([]);
    const [displayProductNames, setdisplayProductNames]  = useState([]);
    const [display, setdisplay] = useState(false);
    const [individualproduct, setindividualproduct] = useState(
        {
            "name":"",
            "photo_url":"",
            "quantity":"",
            "id":0,
            "price": 0,
            "count":0
        }
    )
    // console.log(getItems.state, typeof getItems);
    useEffect(()=>{
        setDisplayslectedItems([...getItems.state])
    },[]);
    const deleteSelectItem = (index)=>{
        displayslectedItems.splice(index,1);
        setDisplayslectedItems([...displayslectedItems])

    }
    const addProductNmaes= ()=>{
        setdisplay(true)
        for(let i of displayslectedItems){
            displayProductNames.push(i.name)
        }
        setdisplayProductNames([...displayProductNames])
    }
    const removeProductName = (index)=>{
        displayProductNames.splice(index, 1);
        displayslectedItems.splice(index,1);
        setDisplayslectedItems([...displayslectedItems])
        setdisplayProductNames([...displayProductNames]);

    }
    const showIndiualproduct = (index)=>{
        let val = [...displayslectedItems]
        navigation('/individualProduct', {state:val.splice(index,1)});
    }
  return (
    <div>
      {/* <h1>here added products</h1> */}

      {/* {
       displayslectedItems && displayslectedItems.map((ele, index)=>
        <div key={index}> 
            <div className='row'>
                <div style={{'display':"flex"}}>
                <div className='card col-5 col-md-3'>
            <p style={{"color":"red"}}>product name is:{ele.name}</p>
                <div style={{display:"flex"}}>
                    <img src={ele.photo_url} style={{height:"100px",width:"100px"}} />
                    <button onClick={()=>{
                        increament(index, ele)
                      
                    }}>+</button>
                    <button onClick={()=>{
                        decreament(index, ele)
                    }}>-</button>
                    <p>count :{ele.count>=0?ele.count:0}</p>
            </div>
            <p>{ele.quantity}</p>
            <p>{ele.price}</p>
        </div>
                <div>
                    <button onClick={()=>{deleteSelectItem(index)}}>x</button>
                </div>
                </div>

            </div>
        </div>
        )
      } */}
      <button onClick={()=>{
        addProductNmaes()
      }}>total selected products is:{displayslectedItems.length}</button>
      {
        display == true ? displayProductNames.map((ele, index)=>
            <div key={index} style={{"display":"flex"}}>
                <div>
                    <button onClick={()=>{showIndiualproduct(index)}}>{ele}</button>
                </div>
                <div>
                    <button onClick={()=>{removeProductName(index)}}>X</button>
                </div>
            </div>
        ):null
      }
    </div>
  )
}

export default ShowAddedproducts
