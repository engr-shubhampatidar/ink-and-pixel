import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='mt-[25px] flex justify-between items-center text-xl font-[400]'>
                <div className='logo px-9px py-2 w-[20%] font-bold'>Shubham</div>
                <nav>
                    <ul className='flex justify-center items-center gap-[47px] px-[19px] py-[10px] w-fit'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </nav>
                <div className='logo px-10 py-2 w-[20%]'>
                    <button>Dark</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;


