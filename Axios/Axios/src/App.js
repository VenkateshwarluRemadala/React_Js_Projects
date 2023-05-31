import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React, {useState,useEffect}from 'react';
const baseurl="https://jsonplaceholder.typicode.com/posts/1"
function App() {
  const [post, setpost]=React.useState([])
  React.useEffect(()=>{axios.get(baseurl).then((response)=>{setpost(response.data)})},[])

  
  return (
    <div className="App">
      <h1>{post.title}</h1>
    </div>
  );
}

export default App;
