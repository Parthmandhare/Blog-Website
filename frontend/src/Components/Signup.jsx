import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate();

  const[userData, setUserData] = useState({
        UserName: "",
        Email: "",
        Password: ""
  });

  const[errMsg, setErrMsg] = useState("");

  const createUser = async(e) => {
    e.preventDefault();

    await axios.post("https://blog-website-backend-rnpv.onrender.com/SignUp", {
      
        UserName: userData.UserName,
        Email: userData.Email,
        Password: userData.Password

    }, {
      withCredentials: true
    }).then((res) => {
      navigate("/userDashboard")
    }).catch((error) => {
      if (error.response) {
        setErrMsg(error.response.data)
        // console.log(error.response.data);
        console.log(error.response.status);
        console.log(errMsg);
        
      }else{
      console.log("err: " + error.message);
      }
    })


  }
  return (

        <div className=' min-h-screen w-full grid gird-rows-2 text-center md:grid md:grid-cols-2'>

          <div className='flex flex-col justify-center items-center gap-4 '>
            

            <p className='text-5xl font-bold'>Sign Up</p>

            <p className='md:hidden mt-3 font-semibold text-lg'>Enter your details and start your jounery <br /> with us!</p>

            <div className='flex flex-col gap-5 w-full p-10 justify-center items-center'>
              <input type="text" placeholder='Username' className= 'md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full' required value={setUserData.UserName} onChange={(e) => {setUserData({...userData, UserName: e.target.value})}} />

              <input type="email" placeholder='Email' className= 'md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full' required 
              value={setUserData.Email} onChange={(e) => {setUserData({...userData, Email: e.target.value})}}/>

              <input type="password" placeholder='Password' className= 'md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full' required 
              value={setUserData.Password} onChange={(e) => {setUserData({...userData, Password: e.target.value})}}/>

              <button className='bg-purple-600 text-white px-5 py-2  rounded-3xl text-md w-1/2 h-3/2 hover:bg-purple-500 font-bold' onClick={createUser}>Sign Up</button>

              {errMsg && (
                <p className='text-red-600 font-bold'>{errMsg.msg}</p>
              )}

              <p className='font-bold text-lg md:text-sm'>Already have account? <span className='cursor-pointer text-purple-600' onClick={() => navigate("/signin")}>SignIn</span></p>
            </div>


          </div>

          <div className='hidden lg:block lg:bg-purple-600 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center text-white gap-8 px-24'>
            <p className='text-4xl font-bold'>Welcome to BlogSphere!</p>

            <div className='text-md font-semibold'>
            
            Join our vibrant community of bloggers, writers, and thinkers. Share your ideas, connect with like-minded individuals, and make your voice heard. Signing up is quick and easy!
            </div>

            <button className=' border-white border-2 text-white px-5 py-2 rounded-3xl text-md w-1/2 hover:bg-purple-500 font-bold' onClick={() => navigate("/signin")}>Sign In</button>
          </div>

        </div>

  )
}

export default Signup