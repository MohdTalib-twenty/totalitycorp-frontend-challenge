import React, { useState } from "react";
import {json, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
export default function LogIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");
  const Navigate = useNavigate();
  const handleUser=()=>{
    Navigate('/signup')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!email || !password){
      toast.warning("Please Enter all the Fields")
    }else{
      var user = JSON.parse(localStorage.getItem("User"))
      if(user){
        if(user.email === email && user.password === password){
          toast.success("LogIn Successfull")
          Navigate("/")
        }else{
          toast.warning("Please Enter all the Fields Correctly")
        }
      }
    }
  }
  return (
    <>
     <div className="container   px-5 py-5 mt-5" style={{maxWidth: "500px"}}>
      <form className="border border-rounded border-dark px-3 py-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
       <div className="d-flex flex-row">
       <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        <button  className="btn btn-success text-white mx-3" onClick={handleUser}>
          New User
        </button>
       </div>
      </form>
      </div>
    </>
  );
}
