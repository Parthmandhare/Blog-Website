import React from 'react'
import OverviewPost from './OverviewPost'
import Sidebar from './Sidebar'

const AllPosts = () => {
  return (
   <>
   <hr className="my-4 border-t border-gray-300" />
   <div className='flex justify-center p-5'>
    <div className='flex flex-col mt-5 items-center gap-5'>
                <OverviewPost/>
                <OverviewPost/>
                <OverviewPost/>
                <OverviewPost/>
                <OverviewPost/>
                <OverviewPost/>
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