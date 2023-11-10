import React from 'react'
import Bg from '../assets/bg.jpg'

const ComingSoon = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div id='bg-overlay-soon' className='relative w-full h-full'>
                  <img className='relative h-full w-full object-cover' src={Bg} alt="" />
        </div>

        <div className='z-[999] p-10 absolute top-[25%] left-[0%] text-left'>
             <h1 className='text-[6vw] font-bold text-white bg-transparent p-4 drop-shadow-2xl'>Coming Soon</h1>
             <h3 className='text-[4vw] md:text-[3vw] font-bold text-white bg-transparent text-opacity-75 p-4 drop-shadow-2xl'>You will be able to use ByePaper on November 22nd.</h3>
        </div>
       
        

    </div>
  )
}

export default ComingSoon