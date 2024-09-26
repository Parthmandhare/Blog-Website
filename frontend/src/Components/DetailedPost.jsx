import React from 'react'
import Navbar from './Navbar'
import Post from './Post'
import { useParams } from 'react-router-dom'

const DetailedPost = () => {
  const {id} = useParams()
  
  return (
    <>
      <Navbar/>
      <div className='w-full flex flex-col items-center'>
        <Post id={id}/>
      </div>
    </>
  )
}

export default DetailedPost