import React, { useEffect, useState } from 'react'
import OverviewPost from './OverviewPost'
import Sidebar from './Sidebar'
import axios from 'axios';

const AllPosts = ({posts}) => {
  useEffect(() => {
    console.log(posts);
    
  })

  return (
   <>
   <hr className="my-4 border-t border-gray-300" />
   <div className='flex justify-center p-5 gap-20'>

    <div className='flex flex-col mt-5 gap-5'>

      {
        posts.map((post) => {
          return(
            <OverviewPost post = {post}/>
          )
        })
      }

    </div>
    <div className="hidden md:inline-flex mx-4 border-l border-gray-300 min-h-screen"></div>

    <div className='hidden md:inline-flex'>
        <Sidebar/>
    </div>

   </div>
   </>
  )
}

export default AllPosts