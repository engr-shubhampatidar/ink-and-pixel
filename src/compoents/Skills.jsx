import React from "react";
import node from '../assets/node.png';
import mySQL from '../assets/mySQl.png';
import javascript from '../assets/javascript.png';
import css from '../assets/css.png';
import arrow from '../assets/arrowR.svg';


const Skills = () => {

    return (
        <>
         <div className="h-[100vh] flex items-center justify-center">
            <div className="w-[70%] grid grid-cols-3 max-lg:grid-cols-1 techs rounded-[50px] flex">
                <div className=" col-span-2 w-fulll py-[40px] px-[40px] text-left">
                    <h1 className="decorate-txt font-[600] md:text-[44px] font-Poppins mb-[20px]">Tech That Powers Great Products</h1>
                    <p className="font-[400] md:text-[24px] md:leading-[44px] mb-[20px]">Skilled across modern frontend, backend, and DevOps tools to build scalable, responsive, and high-performing web applications.</p>
                    <button className="techs flex items-center gap-1  md:text-[16px] md:font-[600] border rounded-[15px] px-[13px] py-[8px]">
                        <p>Let's work Together</p>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </div>
                <div className="w-full rounded-tr-[50px] flex flex-col items-center justify-center px-[20px] py-[40px] rounded-br-[50px] ">
                    <div className="grid grid-cols-4 w-full">
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img  src={mySQL} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={css} alt="mySQL" />
                        </div>
                        <div className="flex items-center justify-center">
                        <img src={node} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={javascript} alt="mySQL" />
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-4 w-full">
                    <div></div>
                        <div className="flex items-center justify-center">
                        <img src={mySQL} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={css} alt="mySQL" />
                        </div>
                        <div className="flex items-center justify-center">
                        <img src={node} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={javascript} alt="mySQL" />
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-4 w-full">
                    <div></div>
                        <div className="flex items-center justify-center">
                        <img src={mySQL} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={css} alt="mySQL" />
                        </div>
                        <div className="flex items-center justify-center">
                        <img src={node} alt="mySQL" />
                        </div>
                        <div></div>
                        <div className="flex items-center justify-center">
                        <img src={javascript} alt="mySQL" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Skills;