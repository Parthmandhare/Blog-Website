import React from 'react'

const Sidebar = () => {
  return (
    <div className='mt-10 flex flex-col gap-8'>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-4'>
        <p className='font-bold text-sm '>Staff Picks</p>
        <div className='flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          <p className='font-bold text-sm cursor-pointer'>Parth Mandhare</p>
        </div>
        </div>

        <p className='text-sm font-semibold cursor-pointer'>“You Can’t Eat Technology.”</p>
      </div>
     

      <div>
        <p className='font-bold text-sm'>Recommended topics</p>
        <div className='mt-2 flex gap-2'>
          <p className='bg-slate-300 w-fit px-4 py-1 font-semibold rounded-3xl text-sm cursor-pointer'>Programming</p>
          <p className='bg-slate-300 w-fit px-4 font-semibold py-1 rounded-3xl text-sm cursor-pointer'>Interview</p>
        </div>
        <div className='mt-2 flex gap-2'>
        <p className='bg-slate-300 w-fit px-4 font-semibold py-1 rounded-3xl text-sm cursor-pointer'>Sports</p>
        <p className='bg-slate-300 w-fit px-4 font-semibold py-1 rounded-3xl text-sm cursor-pointer'>Movies</p>
        </div>
      </div>

      <div>
        <div className='font-bold text-sm mt-4'>Recommended Profile</div>

        <div className='flex flex-col gap-5 mt-4'>
          <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p className='font-bold text-sm cursor-pointer'>John Snow</p>
          </div>

          <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p className='font-bold text-sm cursor-pointer'>Phil Dunphy</p>
          </div>

          <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p className='font-bold text-sm cursor-pointer'>Ted Mosby</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar