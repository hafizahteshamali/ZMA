import React from 'react'
import { NavLink } from 'react-router-dom';

const DesignSection = ({ DesignGlobalData, theriData }) => {
    const { heading, text, bulletText, imgUrl, services } = DesignGlobalData;
    return (
        <div className='container mx-auto'>
            <div className="w-full mt-[100px]">
                <div className="lg:w-[80%] mx-auto">
                    <h1 className="text-5xl lg:text-6xl lg:w-[55%] leading-snug mx-auto text-center font-[500] text-[var(--text-hover-color)]">
                        {heading}
                    </h1>
                    <p className="lg:w-[45%] mx-auto text-center my-5 text-[var(--text-color)]">
                        {text}
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <div className="h-[20px] w-[20px] bg-[#519BFF] rounded-full"></div>
                        <p className="text-[#519BFF]">{bulletText}</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-start rounded-b-2xl border border-[#0d99ff] my-[50px] rounded-xl">
                        {services.map((item, index) => {
                            return (
                                <div key={index} className={item.rightBorder ? "min-h-[700px] w-[95%] md:w-[45%] lg:w-[50%] lg:border-r h-[100%] border-[#0d99ff] flex flex-col justify-start items-center" : "min-h-[700px] w-[95%] md:w-[45%] lg:w-[50%] h-[100%] flex flex-col justify-start items-center"}>
                                    <img src={item.img} className={item.pl ? 'w-full py-4 lg:pl-4' : 'w-full py-4 lg:pr-4'} alt="" />
                                    <div className='h-[450px] w-full bg-[#B1C5DF8F] flex justify-start p-1 items-center px-6'>
                                        <div className='w-[85%] flex flex-col justify-center gap-5'>
                                            <h1 className='text-2xl my-5 font-[500]'>{item.smHead}</h1>
                                            <p className='text-[14px] font-[400]'>{item.description}</p>
                                            <NavLink
                                                className="w-[50%] h-[45px] service_tool_box_btn rounded-4xl flex justify-center items-center border-1 text-[var(--text-color)] border-white"
                                                to={item.btnLink}
                                            >
                                                {item.btnText}
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className='my-[100px]'>
                        <h1 className='text-center text-4xl font-[500] mb-[30px]'>Their words</h1>
                        <div className='my-5 border w-[90%] mx-auto lg:w-[100%] lg:mx-0 lg:border-[#0d99ff] rounded-2xl overflow-hidden flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center'>
                            <div className='lg:h-[500px] lg:w-[34%] bg-[#B1C5DF] flex justify-center items-center border-r p-3 border-[#0d99ff]'>
                                <div className='h-[400px] w-[80%] flex flex-col justify-between'>
                                    <div>
                                        <div className='flex items-center gap-4'>
                                            <div className='h-[20px] w-[20px] rounded-full bg-[#005AB1]'></div>
                                            <span className='text-[#005AB1] text-xl'>Clients over years</span>
                                        </div>

                                        <h1 className='text-7xl text-[var(--black-color)] font-[500] my-5'>50+</h1>
                                    </div>

                                    <p className='text-[#3D4F60] font-[400]'>We’re in it for the long run supporting your website’s growth and evolution every step of the way.</p>
                                </div>
                            </div>

                            {theriData.map((item, index) => {
                                return (
                                    <div key={index} className='lg:h-[500px] lg:w-[33%] bg-[#B1C5DF] p-3 flex justify-center items-center border-r border-[#0d99ff]'>
                                        <div className='h-[400px] w-[80%] flex flex-col justify-between'>

                                            <p className='text-[#3D4F60] font-[400] text-[20px]  w-[90%]'>{item.para1} <strong className='text-[var(--black-color)]'>{item.str}</strong> {item.para2}</p>

                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h3 className='text-xl font-[700] text-[var(--black-color)]'>{item.name}</h3>
                                                    <p className='text-[#3D4F60]'>{item.designation}</p>
                                                </div>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignSection
