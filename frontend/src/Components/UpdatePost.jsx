import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {
  const navigate = useNavigate();

  const [myPost, setMyPost] = useState({}); // State to store the post data
  const id = useParams().id; // Get the post ID from URL parameters

  // Fetch the post data on component mount
  useEffect(() => {
    getMyPost();
  }, []);

  // Function to fetch the post data
  const getMyPost = async () => {
    try {
      const res = await axios.get(`https://blog-website-backend-rnpv.onrender.com/posts/${id}`);
      setMyPost(res.data); // Update the state with the fetched data
    } catch (e) {
      console.log(e);
    }
  };

  // Handle input changes to update the myPost state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMyPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Handle form submission to update the post data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://blog-website-backend-rnpv.onrender.com/posts/${id}`, myPost, {
        withCredentials: true
        
      });
      console.log("Post updated:", res.data);
      // Redirect or show success message if needed
      navigate("/userDashboard")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar />

      <div className="mt-10 flex justify-center">
        <form 
          onSubmit={handleSubmit} 
          className="w-3/4 md:w-1/3 md:m-10 bg-gray-100 p-10 rounded-2xl shadow-md flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-bold text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
              placeholder="Enter Your Title"
              value={myPost.title || ''} // Use the state value for the input
              onChange={handleInputChange} // Update state on input change
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block mb-2 text-lg font-bold text-gray-900"
            >
              Content
            </label>
            <textarea
              id="content"
              name="desc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Enter Your Blog's Content..."
              value={myPost.desc || ''} // Use the state value for the textarea
              onChange={handleInputChange} // Update state on textarea change
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-lg text-sm px-5 py-2.5 text-center bg-black text-white hover:bg-slate-900"
          >
            Update Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
