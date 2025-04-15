import React from 'react';
import Profile from '../assets/profile.jpeg';
const Home = () => {
    return (
        <>
            <div className='h-[92vh] w-full flex flex-col justify-center items-center'>
                <div className='w-[1000px] h-fit flex flex-col justify-center items-center'>
                    <div className='text-md py-[5px] px-[4px] flex justify-center items-center gap-[12px] font-semibold border rounded-xl '>
                        <img src={Profile} alt="01" className='w-[20px] h-[20px] rounded-md' />
                        <h1>hi ,I'm Shubham Patidar</h1>
                    </div>
                    <h2 className='line-hieght text-[75px] font-[700] mt-[22px]'>Crafting Scalable Web Solutions with Modern Tech & Clean Architecture</h2>
                    <p className='mt-[25px]'>Turning Complex Problems into Elegant Software Solutions with 3.6+ Years of Experience!</p>
                </div>
                <button className=' px-[20px] py-[10px] border border-white rounded-xl mt-[57px]'>let’s work togather</button>
            </div>
        </>
    )
}

export default Home;
