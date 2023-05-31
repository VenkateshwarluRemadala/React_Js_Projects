import { useState, useEffect } from 'react';
import './App.css';
import{Card} from "react-bootstrap";
function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data ,setData] = useState([]);
  useEffect(()=>{
    fetch(url).then(response=>response.json()).then(json=>{
      console.log(json);
      setData(json);
    }).catch(e=>{
      console.log(e)
    })
  },[])
  return (
    <div className="App">
      {
        data.map(item=>{
          return(
            <div>
              <Card style={{ width: '18rem' }}>


                <Card.Title>{item.body}</Card.Title>
                <Card.Text>{item.id}</Card.Text>
                <Card.Text>{item.userId}</Card.Text>
                <Card.Title>{item.title}</Card.Title>


              </Card>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
