import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import OverviewPost from "./OverviewPost";
import OverviewPostDash from "./OverviewPostDash";
import axios from "axios";

const UserDashboard = () => {

  const [userName, setUserName] = useState("")

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async() => {
    await axios.get("http://localhost:5000/user/dashboard", {
      withCredentials: true
    }).then((res) => {
      setUserName(res.data.user.UserName);
      setPosts(res.data.user.posts)
      console.log(res.data);
     }).catch((err) => {
      console.log(err);
      
     })
  }

  return (
    <>
      <Navbar />

     {
      userName ?  <div className="flex flex-row md:mx-40 mt-10">
      <div className="basis-3/4 flex flex-col gap-2 mx-7 ">
        <p className="text-2xl font-bold">{userName}</p>
        <div>
          {
            posts.map((post) => {
              return(
                <>
                  <OverviewPostDash id={post} userName = {userName}/>
                </>
              )
            })
          }
        </div>
      </div>

      <div className="hidden md:block border-l-2 border-gray-300 h-screen"></div>

      <div className="hidden basis-1/4 md:inline-flex flex flex-col gap-2 ml-5">
        <div className="bg-blue-500 text-white rounded-full px-8 py-6 w-fit text-lg font-bold">
          P
        </div>

        <div className="text-xl font-semibold">{userName}</div>

        <div className="text-sm text-green-500 font-semibold cursor-pointer">Edit Profile</div>
      </div>
      
    </div> : <div className="flex flex-row md:mx-40 mt-10">
      <h1>Hello! you need to log in first! </h1>
    </div>
     }
    </>
  );
};


export default UserDashboard;
