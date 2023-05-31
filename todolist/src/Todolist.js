import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

function Todolist() {
    const [userListData, setUserListData] = useState([{id: 1, name: "Kumar"}]);
    function addUser() {
        let obj = {
            id: userListData.length +1,
            name: null
         }

         setUserListData([...obj]);
    }

    function setDataObj() {

    }

  return (
    <div>
       <button onClick = {addUser}>Add input</button>
       {
        userListData.map((item, index) => {
            return(
                <input key= {index} name="userName" value={item.name} onChange={setDataObj} />
            )
            
        })
       }
      
    </div>
  )
}

export default Todolist
