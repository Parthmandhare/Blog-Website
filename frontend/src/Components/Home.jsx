import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import AllPosts from './AllPosts'
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost(); 
    console.log(posts)
  }, [])

  const getAllPost = async() => {
    await axios.get("http://localhost:5000/posts").then((res) => {setPosts(res.data);
    
    }).catch((e) => {console.log("err is: " + e);
    })
  }

  return (
    <>
      <Navbar/>
      <AllPosts posts = {posts}/>
    </>
  )
}

export default Home