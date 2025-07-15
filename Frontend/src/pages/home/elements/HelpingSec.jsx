import React from 'react'
import NormalButton from '../../../components/NormalButton';

const HelpingSec = ({HelpSecData}) => {
    const {imgUrl, heading, subTitle, description, bulletPara, bullets, btnText} = HelpSecData;
  return (
    <div
        className="bg-cover w-full bg-no-repeat pt-10 filter brightness-100 saturate-150"
        style={{ backgroundImage: `url('/assets/images/home/help-section-bg.png')` }}
      >
        <div className="container mx-auto">
            <div className='min-h-[100vh] flex justify-center items-center p-5 lg:my-0'>
            <div className='min-h-[600px] w-full flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-[90%] lg:w-[47%]'>
                    <img src={imgUrl} className='h-[100%] w-[100%] object-contain' alt="" />
                </div>
                <div className='w-[90%] lg:w-[47%] flex flex-col justify-around items-start gap-6 my-[50px]'>
                    <h1 className='text-5xl lg:text-4xl font-[600]'>{heading}</h1>
                    <h3 className='text-3xl lg:text-2xl font-[500] text-[var(--text-color)]'>{subTitle}</h3>
                    <div>
                    <p className='w-[100%] lg:w-[70%] text-[var(--text-color)]'>{description}</p>
                    <p className='w-[100%] lg:w-[70%] text-[var(--text-color)]'>{bulletPara}</p>
                    </div>

                    <ul className='flex flex-col gap-3'>
                        {bullets.map((item, index)=>{
                            return(
                                <li key={index} className='flex text-[var(--text-color)] items-center gap-3'>
                                    <img src="/assets/images/home/tick.png" alt="" />
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    <NormalButton text={btnText} className="h-[50px] w-[70%] lg:w-[30%] bg-[var(--white-color)] font-[600] text-[var(--text-hover-color)]" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HelpingSec