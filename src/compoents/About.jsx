import React from 'react';
import cardOne from '../assets/cardOne.png';
import cardSecond from '../assets/cardSecond.png';
import cardThird from '../assets/cardThird.png';

const About = () => {
    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-center mb-[150px] h-[100vh] max-lg:h-full'>
                <div className="about-container mt-[100px] text-[40px] max-lg:text-xl  font-[400] leading-[67px] max-lg:leading-5 w-[75%]">
                    <p>Hi, <span className='text-blue-500'>I’m Shubham,</span>a passionate <span className='text-blue-500'>Full Stack Developer </span>  with <span className='text-blue-500'>4+ years</span>  of experience in building scalable MERN stack applications. I’ve led feature development, mentored junior devs, and enhanced performance in enterprise-level products. I thrive in fast-paced environments and solving complex problems with clean, efficient code.</p>
                </div>
            </div>
                <div className='flex flex-col mt-[150px]  w-[80%] h-full'>
                    <div className='flex items-center justify-center'>
                        <img className='w-auto ' src={cardOne} alt="card" />
                    </div>
                    <div className='flex justify-around max-lg:flex-col max-lg:px-8 gap-5 mb-5'>
                                     <img className='w-auto ' src={cardSecond} alt="card" />
                        <img className='w-auto' src={cardThird} alt="card" />
                    </div>
                </div>
                </div>
        </>
    )
}

export default About;
