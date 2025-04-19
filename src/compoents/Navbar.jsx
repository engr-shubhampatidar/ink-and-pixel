import React from 'react';
import darkMode from '../assets/darkMode.png';

const Navbar = () => {
    return (
        <>
            <div className='pt-[22px] max-lg:p-0 flex justify-between items-center text-[16px] max-lg:text-xs max-2xl:text-sm font-[400]'>
                <div className='logo  px py-2 w-[20%] font-bold flex justify-center'>
                     <div className='techs-logo rounded-md text-[12px] px-[3px] flex items-center justify-center'>
                        <h1 className='decorate-txt'>SP</h1>
                     </div>
                    <p>Shubham</p>
                </div>
                <nav className='max-lg:hidden'>
                    <ul className='flex justify-center max-lg:hidden items-center gap-[47px] px-[19px] py-[10px] w-fit'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </nav>
                <div className='logo px-10 py-2 w-[15%]'>
                    <button className='techs rounded-[11px] p-[5px] w-[53px]'>
                        <div className='techs h-[25px] w-[25px] rounded-md flex items-center justify-center'>
                            <img src={darkMode} alt="mode" />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;


