import React from 'react'
import { LuSquareArrowRight } from "react-icons/lu";

const DiscoverProject = () => {
  return (
    <div className='container mx-auto lg:w-[80%] my-[100px]'>
        <div className='h-[400px] bg-cover rounded-3xl flex justify-center items-center' style={{backgroundImage: `url('/assets/images/service/bottom-banner.jpg')`}}>
            <button className='text-[var(--white-color)] flex justify-center items-center gap-4 h-[45px] w-[60%] lg:w-[25%] serviceBtn'><span>Discover our projects</span> <LuSquareArrowRight className='text-3xl' /> </button>
        </div>

        <div className='my-[100px] flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-3xl lg:text-5xl text-center lg:leading-normal text-[#3D4F60] font-[500]'>Development shouldn’t be complicated. <br /> <span className='text-[var(--text-hover-color)]'>We simplify every step.</span></h1>
            <button className='h-[45px] w-[50%] lg:w-[20%] bg-[#ffffff54] border-2 border-[#fff] flex justify-center items-center gap-3 rounded-lg'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#00264B]'></div>
                <span className='text-[#00264B] font-[400]'>Get in touch</span>
            </button>
        </div>
    </div>
  )
}

export default DiscoverProject