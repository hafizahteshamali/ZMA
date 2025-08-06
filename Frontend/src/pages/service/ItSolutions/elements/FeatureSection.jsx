import React from 'react'
import Tabs2 from '../../../../components/Tab2';

const FeatureSection = ({FeaturesData}) => {
    const {title, heading, para} = FeaturesData;
  return (
    <div className='min-h-screen'>
        <div className="container mx-auto p-5">
            <div className='flex flex-col lg:flex-row justify-between items-start'>
                <div className='w-full lg:w-[45%]'>
                    <div className='h-[40px] w-[150px] bg-[var(--text-hover-color)] text-[var(--white-color)] flex justify-center items-center rounded-full'>{title}</div>

                    <h1 className='my-5 text-4xl text-[var(--text-hover-color)]'>{heading}</h1>
                    <p className='text-[14px] lg:w-[70%] text-[var(--text-hover-color)]'>{para}</p>

                    <Tabs2 />
                </div>
                <div className="max-h-[850px] w-full lg:w-[50%] rounded-lg my-5 lg:my-0 lg:rounded-4xl overflow-hidden">
                    <img src="/assets/images/it-solutions/feature-img.jpg" className='h-[100%] w-[100%] object-contain' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection