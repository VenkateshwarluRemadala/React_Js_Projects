import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import  './Profile.css'

function Profile() {


  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  
  const [data1,setdata1]=useState([])


  useEffect(()=>{
    const fetchData = async () => {
      const login = await axios.get(
        "https://dummyjson.com/users"
      );
      setdata1(login.data)

  };
  fetchData()
  

},[])

const submit=()=>{
  let arr=[]
  const obj={
    email:email,
    password:password
  }
  arr.push(obj)

   const a= arr.filter(object1 => {
      return data1.users.some(object2 => {
        return object1.email === object2.email &&object1.password === object2.password ;
      });
    });
  
  
  
  console.log(a);
  // console.log(getDifference(arr, data1.users));
}
  return (
    <div style={{width:"100%",marginTop:"100px"}} >
      <main className="form-signin w-100 m-auto">
        <form >
          <img className="mb-4" src="assets/img/logo.png" alt="" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e)=>setemail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary"
            type="submit"
            onClick={submit}
            // style={{float:"left"}}
          >
            Sign in
          </button>
          <button className="btn btn-lg btn-secondary" type="submit">
            Sign-up
          </button>
          {/* <p className="mt-5 mb-3 text-muted">&copy; 2022</p> */}
        </form>
      </main>
    </div>
  );
}

export default Profile;
