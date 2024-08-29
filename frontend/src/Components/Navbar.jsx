import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between mx-8 mt-4'>
          <div className='flex gap-5 '>
            <div className='text-xl font-bold cursor-pointer'>BlogSphere</div>

            <div className=' hidden md:inline-flex flex flex-row md:bg-gray-100 rounded-3xl px-5 py-2 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <input type="search" name="" id="" placeholder='Search Blogs Here...' className='hidden md:block bg-gray-100 text-sm' />
            </div>
          </div>

          <div className='flex gap-5 items-center'>
            <div className=' md:hidden flex flex-row md:bg-gray-100 rounded-3xl px-5 py-2 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <input type="search" name="" id="" placeholder='Search Blogs Here...' className='hidden md:block bg-gray-100 text-sm' />
            </div>
            <div className='hidden md:inline-flex flex gap-1 items-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <p className='text-sm'>Write</p>
            </div>
            <div className='bg-blue-400 rounded-full p-2 text-white cursor-pointer'>PM</div>
          </div>
        </div>
    </>
  )
}

export default Navbar