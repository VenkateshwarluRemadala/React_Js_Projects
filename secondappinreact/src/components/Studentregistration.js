import React from 'react'

function Studentregistration() {
   var [name,setName]=React.useState("venkat")
   var [username,setUsername]=React.useState("venkatesh")
   var [password,setPassword]=React.useState("")

    return (
        <div>
            <p>{name}</p>

         <button onClick={()=>{setName("Nakhshatra")}}>name</button><br/>
         <input type="text" name="username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
         <input type="text" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
        <p>{username}</p>
        <p>{password}</p>

        </div>
    )
}

export default Studentregistration
