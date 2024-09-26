import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();

  const[userData, setUserData] = useState({
    UserName: "",
    Password: ""
  });

  const[errMsg, setErrMsg] = useState("");

  const signIn = async(e) => {

    e.preventDefault();    

    await axios({
      method: 'post',
      url: 'http://localhost:5000/SignIn',
      data: {
        UserName: userData.UserName,
        Password: userData.Password
      },
      withCredentials: true
    }).then((res) => {
      navigate("/userDashboard")
      // console.log(res);
      
    }).catch((err) => {
        if(err.response){
          setErrMsg(err.response.data);
          console.log(err.response.status);
        }else{
          console.log(err);
        }
    })

  }

  return (
    <>
      <div className=" min-h-screen w-full grid gird-rows-2 text-center md:grid md:grid-cols-2">
      <div className="hidden lg:block lg:bg-purple-600 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center text-white gap-8 px-24">
          <p className="text-4xl font-bold">Welcome Back to BlogSphere!</p>

          <div className="text-md font-semibold">
            We’re excited to see you again. Sign in to access your dashboard, connect with your community, and continue sharing your thoughts with the world.
          </div>

          <button className=" border-white border-2 text-white px-5 py-2 rounded-3xl text-md w-1/2 hover:bg-purple-500 font-bold">
            Sign Up
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-5xl font-bold">Sign In</p>

          <p className="md:hidden mt-3 font-semibold text-lg">
            Enter your details and continue your jounery <br /> with us!
          </p>

          <div className="flex flex-col gap-5 w-full p-10 justify-center items-center">
            <input
              type="text"
              placeholder="Username"
              className="md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full"
              value={setUserData.UserName} 
              onChange={(e) => {setUserData({...userData, UserName: e.target.value})}}
            />
            <input
              type="password"
              placeholder="Password"
              className="md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full"
              value={setUserData.Password} 
              onChange={(e) => {setUserData({...userData, Password: e.target.value})}}
            />

            <button className="bg-purple-600 text-white px-5 py-2  rounded-3xl text-md w-1/2 h-3/2 hover:bg-purple-500 font-bold"
            onClick={signIn}>
              Sign In
            </button>

            {errMsg && (
              <p className='text-red-600 font-bold'>{errMsg.msg}</p>
            )}

            <p className="font-bold text-lg md:text-sm">
              Don't have account?{" "}
              <span className="hover:text-purple-600">SignUp</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
