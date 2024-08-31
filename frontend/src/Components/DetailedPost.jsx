import React from 'react'
import Navbar from './Navbar'
import Post from './Post'

const DetailedPost = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full flex flex-col items-center'>
        <Post/>
      </div>
    </>
  )
}

export default DetailedPost