import React from 'react';
import webLogo from '../assets/webLogo.png';
import testLogo from '../assets/testLogo.png';
import apiLogo from '../assets/apiLogo.png';

const Techs = () => {
    return (
        <>
          <div className='techs-bg h-screen max-lg:h-full flex flex-col items-center justify-center' >

            <div>
                <h1 className='text-[40px] font-bold'>What we Offer</h1>
                <p className='mt-2 text-[24px] font-[600]'>End-to-end tech expertise to bring your </p>
                <p className='text-[24px] font-[600]'>vision to life — fast, scalable, and reliable.</p>
            </div>
            <div className='flex justify-center items-center mt-[36px]'>

                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[20px] p-5'>
                    <div className='techs border border-gray-700 rounded-[50px] w-[403px] max-lg:w-full px-[60px] max-lg:px-8 py-[78px] max-lg:py-8'>
                        <div className='flex flex-col justify-center gap-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={webLogo} alt="Logo" />
                            </div>
                            <div>
                                <h1 className='text-[21px] font-[600] mt-[36px]'>Full-Stack Development</h1>
                                <p className='text-[16px] font-[400] mt-[16px]'>I offer smart scaling with system design and performance tuning, plus robust APIs and DevOps setup using</p>
                            </div>
                        </div>
                    </div>
                    <div className='techs border border-gray-700 rounded-[50px] w-[403px] max-lg:w-full px-[30px] max-lg:px-5 py-[78px] max-lg:py-8'>
                        <div className='flex flex-col justify-center gap-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={testLogo} alt="Logo" />
                            </div>
                            <div>
                                <h1 className='text-[21px] font-[600] mt-[36px]'>Tech Consulting & Architecture</h1>
                                <p className='text-[16px] font-[400] mt-[16px]'>We offer expert guidance in system design, architecture planning, and performance tuning. Our goal is to help you scale</p>
                            </div>
                        </div>
                    </div>
                    <div className='techs border border-gray-700 rounded-[50px] w-[403px] max-lg:w-full px-[60px] max-lg:px-8 py-[78px] max-lg:py-8'>
                        <div className='flex flex-col justify-center gap-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={apiLogo} alt="Logo" />
                            </div>
                            <div>
                                <h1 className='text-[21px] font-[600] mt-[36px]'>API & DevOps Solutions</h1>
                                <p className='text-[16px] font-[400] mt-[16px]'>We build reliable backend systems with REST & GraphQL APIs, real-time features, and smooth AWS </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Techs;
