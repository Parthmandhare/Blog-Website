import React from 'react'
import Navbar from './Navbar'

const UpdatePost = () => {
  return (
    <>
      <Navbar />

      <div className="mt-10 flex justify-center">
        <form class="w-3/4 md:w-1/3 md:m-10 bg-gray-100 p-10 rounded-2xl shadow-md flex flex-col gap-5">
          <div>
            <label
              for="small-input"
              class="block mb-2 text-lg font-bold text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
              placeholder="Enter Your Title"
            />
          </div>

          <div>
            <label
              for="message"
              class="block mb-2 text-lg font-bold text-gray-900"
            >
              Content
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Enter Your Blog's Content..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="rounded-lg text-sm px-5 py-2.5 text-center bg-black text-white hover:bg-slate-900"
          >
            Update Blog
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdatePost