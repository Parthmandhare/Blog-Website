import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userThere, setuserThere] = useState();

  useEffect(() => {
     isThere();
  }, []);

  const isThere = async() => {
    await axios.get("https://blog-website-backend-rnpv.onrender.com" ,{
      withCredentials: true
    }).then((res) => {
      console.log(res);
      console.log("user is there");
      setuserThere(true)
    }).catch((e) => {
      console.log(e);
      setuserThere(false)
    })
  }


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const logout = async() => {
    await axios.get("https://blog-website-backend-rnpv.onrender.com/logout", {
      withCredentials: true
    }).then((res) => {
      navigate("/")
     }).catch((err) => {
      console.log(err);
      
     })
  }
  return (
    <>
        <div className='flex justify-between mx-8 mt-4'>
          <div className='flex gap-5 '>
            <div className='text-xl font-bold cursor-pointer' onClick={() => {navigate("/")}}>BlogSphere</div>

            <div className=' hidden md:inline-flex flex flex-row md:bg-gray-100 rounded-3xl px-5 py-2 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <input type="search" name="" id="" placeholder='Search Blogs Here...' className='hidden md:block bg-gray-100 text-sm' />
            </div>
          </div>

          <div className='flex gap-5 items-center'>
            <div className=' md:hidden flex flex-row md:bg-gray-100 rounded-3xl px-5 py-2 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <input type="search" name="" id="" placeholder='Search Blogs Here...' className='hidden md:block bg-gray-100 text-sm' />
            </div>


           {
            userThere && (
              <div className='hidden md:inline-flex flex gap-1 items-center cursor-pointer' onClick={() => {navigate("/createPost")}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <p className='text-sm'>Write</p>
            </div>
            )
           }
            
          
          <div className="relative">
          <div className='bg-blue-400 rounded-full p-2 text-white cursor-pointer' onClick={() => toggleModal()}>PM</div>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            {
              userThere ?  <ul className="p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/userDashboard`)}>Dashboard</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => logout()}>Logout</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" ><a href="https://portfolio-two-flame-71.vercel.app/">About me</a></li>
            </ul> : <ul className="p-2">
              {/* <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/userDashboard`)}>Dashboard</li> */}
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/signin`)}>Login</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/signup`)}>Sign Up</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" ><a href="https://portfolio-two-flame-71.vercel.app/">About me</a></li>
              {/* <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => logout()}>Logout</li> */}
            </ul>
            }
            {/* <ul className="p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/userDashboard`)}>Dashboard</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/signin`)}>Login</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/signup`)}>Sign Up</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => logout()}>Logout</li>
            </ul> */}
          </div>
        )}
          </div>
      </div>
        </div>
    </>
  )
}

export default Navbar