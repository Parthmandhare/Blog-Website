import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OverviewPostDash = ({ id, userName }) => {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [myPost, setMyPost] = useState({
    title: "",
    desc: "",
    user: "",
    comments: []
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  const shortenString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  const shortString = shortenString(myPost.desc, 50);

  const getPost = async () => {
    try {
      const res = await axios.get(`https://blog-website-backend-rnpv.onrender.com/posts/${id}`);
      setMyPost({
        ...myPost,
        title: res.data.title,
        desc: res.data.desc,
        user: res.data.user,
        comments: res.data.comments || [] // assuming comments could be empty or undefined
      });
      console.log("data: ", res.data);
    } catch (err) {
      console.log("err is ", err);
    }
  };

  const deletePost = async () => {
    await axios.delete(`https://blog-website-backend-rnpv.onrender.com/posts/${id}`, {
      withCredentials: true
      
    }).then((res) => {
      console.log(res);
      
    }).catch((e) => {
      console.log(e);
      
    })
  }

  return (
    <>
    <div className='flex flex-col'>
        <div className='flex flex-row gap-2 justify-between mt-5' >

    <div className='flex flex-col gap-2 justify-start mt-5 cursor-pointer' onClick={() => navigate(`/DetailedPost/${id}`)}>
    <div className='flex justify-between'>
      <div className='flex gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <p className='text-sm'>{userName}</p>
      </div>

      {/* options */}
      

    </div>
    <div>
      <p className='font-bold text-lg'>{myPost.title}</p>
    </div>
    <div>
      <p className='text-sm text-gray-500'>{shortString}</p>
    </div>
    <div className='flex gap-6'>
      <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <p>12</p>
      </div>
      <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
        <p>12</p>
      </div>
    </div>
    </div>

    <div className="relative">
        <svg 
          onClick={toggleModal} 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="size-6 cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/UpdatePost/${id}`)}>Edit</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-500" onClick={() => {deletePost()}}>Delete</li>
            </ul>
          </div>
        )}
      </div>

    </div>

    <hr className="my-4 border-t border-gray-300" />
    </div>
    
    </>
  );
};

export default OverviewPostDash;
