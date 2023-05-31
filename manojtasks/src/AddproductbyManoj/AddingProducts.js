import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddingProducts() {
    const navigation = useNavigate()
    const [data, setdata] = useState ([
  
        {
              "name":"Cabbage",
              "photo_url":"https://www.freepngimg.com/thumb/categories/2970.png",
              "quantity":"One Unit",
              "id":2,
              "price": 30,
              "count":0
          },
          {
              "name":"Capsicum",
              "photo_url":"https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
              "quantity":"One Unit",
              "id":7,
              "price": 5,
              "count":0
          },
          {
              "name":"Garlic",
              "photo_url":"https://www.freepngimg.com/thumb/garlic/2-2-garlic-transparent-thumb.png",
              "quantity":"One Unit",
              "id":10,
              "price": 20,
              "count":0
          },
          {
              "name":"Beetroot",
              "photo_url":"https://pngimg.com/uploads/beet/beet_PNG28.png",
              "quantity":"One Unit",
              "id":11,
              "price": 20,
              "count":0
          },
          {
              "name":"Tomatoes",
              "photo_url":"https://www.freepngimg.com/thumb/categories/2985.png",
              "quantity":"One Unit",
              "id":13,
              "price": 5,
              "count":0
          },
          {
              "name":"Celeriac",
              "photo_url":"https://w7.pngwing.com/pngs/252/146/png-transparent-celeriac-leaf-vegetable-food-celery-herbes-leaf-vegetable-food-plant-stem-thumbnail.png",
              "quantity":"One Bunch",
              "id":16,
              "price": 5,
              "count":0
          },
          {
              "name":"Carrots",
              "photo_url":"https://www.freepngimg.com/thumb/categories/2971.png",
              "quantity":"One Kg",
              "id":18,
              "price": 60,
              "count":0
          },
          {
              "name":"Onions",
              "photo_url":"https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png",
              "quantity":"One Kg",
              "id":19,
              "price": 120,
              "count":0
          },
          {
              "name":"Potatoes",
              "photo_url":"https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png",
              "quantity":"One container",
              "id":20,
              "price": 80,
              "count":0
          }
      ]);
      const [selectedItems, setselectedItems] = useState([]);
      const increament = (index, object)=>{
        object["count"] = (object["count"]||0)+1;
        data.splice(index, 1, object);
        setdata([...data]) 

      }
      const decreament = (index, object)=>{
        object["count"] = (object["count"]||0)-1;
        data.splice(index, 1, object);
        setdata([...data]) 

      }
      const sendData = ()=>{
        for(let item of data){
            if(item.count>0){
                selectedItems.push(item);
                setselectedItems([...selectedItems])
            }
        }
        navigation("/products", {state:selectedItems});
    }
  return (
    <div>
      {
        data.map((ele, index)=>
        <div key={index}> 
            <div className='row'>
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
                </div>
        </div>
        )
      }
      <button onClick={sendData} className='btn btn-primary'>proceed</button>
    </div>
  )
}

export default AddingProducts
