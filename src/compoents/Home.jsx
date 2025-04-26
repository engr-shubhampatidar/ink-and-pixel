import React from 'react';
import Profile from '../assets/profile.jpeg';
import workLogo from '../assets/work.png';
import Navbar from './Navbar';
import {motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';



const Home = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      }
    }, [inView, controls]);
    return (
        <>
        < motion.div 
        className='home-bg'
         initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <Navbar/>
            <div className='md:h-[95vh] h-[50vh] w-full flex flex-col justify-evenly items-center'>
                <div className='w-[70%] h-fit flex flex-col justify-center items-center'>
                    <div className='techs text-sm font-[200] py-[5px] px-[3px] flex justify-center items-center gap-[12px] font-semibold border rounded-xl '>
                        <img src={Profile} alt="01" className='w-[20px] h-[20px] rounded-md' />
                        <h1>Hi ,I'm Shubham Patidar</h1>
                    </div>
                    <h2 className='line-hieght leading-5 text-[75px] md:leading-[78px] max-lg:text-2xl max-lg:leading-6 text-center font-[700] mt-[25px]'>Crafting Scalable Web Solutions with Modern Tech & Clean Architecture</h2>
                    <p
                    className='mt-[28px] text-sm max-lg:text-xs'>Turning Complex Problems into Elegant Software Solutions with 3.6+ Years of Experience!</p>
                   < motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                   className='techs cursor-pointer text-[16px] px-[20px] py-[8px] flex items-center gap-2 justify-center rounded-md mt-[57px]'>
                    <h1>let's work together</h1>
                    <img className='h-[16px] w-[16px]' src={workLogo} alt="logo" />
                   </motion.button>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Home;
