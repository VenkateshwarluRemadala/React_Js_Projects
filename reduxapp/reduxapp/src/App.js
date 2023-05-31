// import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';

// function App(props) {
//  const increament=()=>{
//     props.dispatch({type:"INCREAMENT"})
//   }
//   const decreament=()=>{
//     props.dispatch({type:"DECREAMENT"})
//   }
//  function check(){
//    console.log(props.count);
//  }
 
//   return (
//     <div className="App">
//       <button onClick={increament}>increament</button>
//       <button onClick={decreament}>decreament</button>
//       <button onClick={check}>check</button>
//       <h1>{props.count}</h1>
      
//     </div>
//   );

// }
// const mapToredux= state=>{
//   return {count:state.count}
// }
// export default connect(mapToredux)(App);
import React, { useEffect, useState } from 'react'
import { Increament } from './Action'
import { useDispatch } from 'react-redux';
import JsonData from './JsonData';
import Table from './Table';
import SendApiData from './SendApiData';
function App() {
  // const [count, setcount] = useState(0);
  // const dispatch = useDispatch();
  // dispatch(Increament(count));

  return (
    <div>
      {/* <button onClick={()=>{setcount(count+2)}}>increament</button> */}
      {/* <p>{count}</p> */}
       {/* <JsonData/> */}
       {/* <Table/> */}
       <SendApiData/>
    </div>
  )
}

export default App

