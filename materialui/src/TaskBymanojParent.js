import React, { useState } from "react";
import TaskByManoj from "./TaskByManoj";

function TaskBymanojParent() {
  const [parentTable, setParentTable] = useState([]);
  const[parentObject, setParentObject] = useState([]);
  const [childObjectIndex, setChildObjectIndex] = useState('')
  const getChildData = (childObject, childObjectIndex) => {
    setChildObjectIndex(childObjectIndex)
    setParentTable(...childObject);
  };

  const sendParentData = ()=>{
    let val = parentTable.splice(0,1);
    setParentObject(...val)
        
  }
//   console.log(parentTable, "venkat");
  return (
    <div>
      {parentTable.length === 0 ? (
          <TaskByManoj sendParentFun={getChildData} data={childObjectIndex} />
      ) : <table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>phone</th>
        </tr>
      </thead>

      <tbody>
        {parentTable &&
          parentTable.map((ele, index) => (
            <tr key={index}>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.phone}</td>
              <td><button onClick={sendParentData}>Revert</button></td>
            </tr>
          ))}
      </tbody>
    </table>}
  
    

    </div>
  );
}

export default TaskBymanojParent;
