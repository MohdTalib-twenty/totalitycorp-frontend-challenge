import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
export default function Signup() {
    const Navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [location,setAddress]=useState("");

    const handleSubmit=async(e)=>{
        if(!name || !email || !password || !location){
          toast.warning("Please Enter All the fields")
        }else{
          var User={
            name : name,
            email : email,
            password : password,
            location : location
          }
          localStorage.setItem("User",JSON.stringify(User));
          toast.success("Registration Successfull")
          Navigate("/")
          
        }
        //console.log(data);
    }

    const handleUser=()=>{
        Navigate("/login")
    }
  return (
    <>
      <div className="container   px-5 py-5 mt-5" style={{ maxWidth: "500px" }}>
        <form className="border border-rounded border-dark px-3 py-3">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="serName"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="emailHelp"
              value={location}
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>
          <div className="d-flex flex-row">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-success text-white mx-3" onClick={handleUser}>
                Already Registered
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
