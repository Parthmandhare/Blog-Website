import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OverviewPost = ({ post }) => {

    const navigate = useNavigate();


  const [myPost, setMyPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    // Update state with post prop when post changes
    if (post) {
      setMyPost(post);
    }
  }, [post]);

  useEffect(() => {
    // Log myPost every time it changes
    console.log("myPost updated:", myPost);
  }, [myPost]);

  useEffect(() => {
    getUser();
  },[post.user])

  const getUser = async() => {
    axios.get(`https://blog-website-backend-rnpv.onrender.com/user/${post.user}`).then((res) => {console.log(res.data.user); setUser(res.data.user)
    }).catch((e) => {console.log(e);
    })
  }

  const shortenString = (str, maxLength) => {
    return str && str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  // Ensure myPost.desc is defined before using it
  const shortString = shortenString(myPost?.desc || "", 50);

  return (
    <>
      <div className='flex flex-col gap-2 justify-start mt-5 cursor-pointer' onClick={() => navigate(`/DetailedPost/${myPost._id}`)}>
        <div className='flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <p className='text-sm'>{user.UserName}</p>
        </div>
        
        <div className='flex flex-col'>
            <div>
            <p className='font-bold text-lg'>{myPost.title}</p>
            </div>
            <div>
            <p className='text-sm text-gray-500'>{shortString}</p>
            </div>
            <div className='flex gap-6 '>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p>12</p>
            </div>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
                <p>12</p>
            </div>
            </div>
        </div>
        <hr className="my-4 border-t border-gray-300" />
      </div>
    </>
  );
};

export default OverviewPost;
