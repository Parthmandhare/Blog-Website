import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = ({id}) => {


  const[post, setPost] = useState({
    title: "",
    desc: "",
    userName: "",
    date: ""
  })

  useEffect(() => {

    myPost();

  }, [id])

  const myPost = async() => {
    await axios.get(`http://localhost:5000/posts/${id}`).then(async(res) => {
      await axios.get(`http://localhost:5000/user/${res.data.user}`).then((Puser) => {
        setPost({
          title: res.data.title,
          desc: res.data.desc,
          userName: Puser.data.user.UserName,
          // date: res.data.date
        });
        
      })
    }).catch((err) => {
      console.log(err);
    })
    
  }

  return (
    <>
      <div className="flex flex-col gap-5 md:w-1/2 m-10">
        <div className="flex justify-start font-extrabold text-2xl font-serif">
         {post.title}
        </div>

        <div className="flex gap-2 justify-start">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <div className="flex flex-col text-sm font-serif">
            <div>{post.userName}</div>
            <div>April 12,2024</div>
          </div>
        </div>

        <div className='flex gap-6 '>
                <div className='flex gap-1 items-center font-serif'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>12</p>
                </div>
                <div className='flex gap-1 items-center font-serif'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    <p>12</p>
                </div>
        </div>
        <div>
            <div className="leading-8 tracking-wider">
            {post.desc}
            </div>
        </div>
      </div>
    </>
  );
};

export default Post;
