import React from "react";

const Signin = () => {
  return (
    <>
      <div className=" min-h-screen w-full grid gird-rows-2 text-center md:grid md:grid-cols-2">
      <div className="hidden lg:block lg:bg-purple-600 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center text-white gap-8 px-24">
          <p className="text-4xl font-bold">Welcome Back to BlogSphere!</p>

          <div className="text-md font-semibold">
            We’re excited to see you again. Sign in to access your dashboard, connect with your community, and continue sharing your thoughts with the world.
          </div>

          <button className=" border-white border-2 text-white px-5 py-2 rounded-3xl text-md w-1/2 hover:bg-purple-500 font-bold">
            Sign Up
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-5xl font-bold">Sign In</p>

          <p className="md:hidden mt-3 font-semibold text-lg">
            Enter your details and continue your jounery <br /> with us!
          </p>

          <div className="flex flex-col gap-5 w-full p-10 justify-center items-center">
            <input
              type="text"
              placeholder="Username"
              className="md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="md:w-1/2 px-5 py-3 h-10 rounded-lg bg-gray-200 w-full"
            />

            <button className="bg-purple-600 text-white px-5 py-2  rounded-3xl text-md w-1/2 h-3/2 hover:bg-purple-500 font-bold">
              Sign In
            </button>

            <p className="font-bold text-lg md:text-sm">
              Don't have account?{" "}
              <span className="hover:text-purple-600">SignUp</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
