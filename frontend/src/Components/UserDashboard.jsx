
import Navbar from "./Navbar";
import OverviewPost from "./OverviewPost";
import OverviewPostDash from "./OverviewPostDash";

const UserDashboard = () => {

  return (
    <>
      <Navbar />

      <div className="flex flex-row md:mx-40 mt-10">
        <div className="basis-3/4 flex flex-col gap-2 mx-7 ">
          <p className="text-2xl font-bold">Parth Mandhare</p>
          <div>
            <OverviewPostDash />
            <OverviewPostDash />
          </div>
        </div>

        <div className="hidden md:block border-l-2 border-gray-300 h-screen"></div>

        <div className="hidden basis-1/4 md:inline-flex flex flex-col gap-2 ml-5">
          <div className="bg-blue-500 text-white rounded-full px-8 py-6 w-fit text-lg font-bold">
            P
          </div>

          <div className="text-xl font-semibold">Parth Mandhare</div>

          <div className="text-sm text-green-500 font-semibold cursor-pointer">Edit Profile</div>
        </div>

        
        
      </div>
    </>
  );
};


export default UserDashboard;
