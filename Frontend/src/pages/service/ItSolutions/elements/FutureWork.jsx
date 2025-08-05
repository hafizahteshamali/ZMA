import React from 'react'

const FutureWork = ({FutureWorkData}) => {
    const {heading, para} = FutureWorkData;
  return (
    <div className='container mx-auto h-screen'>
        <div className='min-h-[300px] flex justify-center items-center'>
            <div className='h-[100%] lg:w-[45%] mx-auto flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl text-[var(--text-hover-color)]'>{heading}</h1>
            <p className='text-center text-[var(--text-hover-color)]'>{para}</p>
            </div>
        </div>

        <div>
            <div className='h-[400px] w-[40%] bg-amber-400 bg-cover bg-no-repeat !overflow-hidden rounded-4xl' style={{backgroundImage: `url('/assets/images/it-solutions/card1.png')`}}>

            </div>
        </div>
    </div>
  )
}

export default FutureWork