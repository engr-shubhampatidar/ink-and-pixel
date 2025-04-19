import React from "react";
import project from "../assets/projects.jpg";
import rect from '../assets/rect.svg';
import node from '../assets/node.svg'  
import mongo from '../assets/mongodb.svg'  
import aws from '../assets/aws.svg' 
import arrow from '../assets/arrowR.svg';



 const Projects =() => {
   return (
    <>
      <div className="h-[100vh] max-lg:h-full w-full flex items-center justify-center mt-[150px]">
         <div className="h-full w-full  flex flex-col items-center justify-center px-[50px]">
          <h1 className='text-[40px] max-xl:text-2xl font-bold'>Overall Work</h1>
          <p className='decorate-txt mt-2 text-[24px] max-xl:text-sm  font-[600]'>Crafting Scalable Digital Solutions with Clean Code & Performance in Mind</p>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 w-full px-[40px] mt-[120px] gap-5 ">
            <div className=" w-full">
                <img className="pro-img rounded-[36px]" src={project} alt="photo" />
            </div>
            <div className="techs border rounded-[50px] h-full col-span-2 text-left py-[42px] max-lg:px-5 px-[120px] max-lg:py-5 flex flex-col items-start gap-[30px]">
                <h1 className="decorate-txt text-[36px] font-[500] mt-2">Raedom</h1>
                <h3 className="decorate-txt text-[24px] font-[400]">Rental Storage Platform</h3>
                <p className="text-[20px] font-[400]">Built a full-stack rental space booking platform with calendar-based scheduling and real-time availability </p>
                <ul className="flex  gap-2 text-[12px] max-lg:text-[10px]">
                    <li className="decorate-txt flex items-center gap-1 border px-1 rounded-full p-1 px-2">
                      <img className="h-[16px] w-[16px]" src={rect} alt="react" />
                      <p>React</p>
                    </li>
                    <li className="decorate-txt flex items-center gap-1 border px-1 rounded-full p-1 px-2">
                    <img className="h-[16px] w-[16px]" src={node} alt="react" />
                    <p>node</p>
                    </li>
                    <li className="decorate-txt flex items-center gap-1 border px-1 rounded-full p-1 px-2">
                    <img className="h-[16px] w-[16px]" src={mongo} alt="react" />
                    <p>MongoDB</p>
                    </li>
                    <li className="decorate-txt flex items-center gap-1 border px-1 rounded-full p-1 px-2">
                    <img className="h-[16px] w-[16px]" src={aws} alt="react" />
                    <p>AWS</p>
                    </li>
                </ul>
                <button className="decorate-txt font-semibold flex items-center justify-center gap-1 border px-1 rounded-2xl py-2 px-2">
                <p>See Work</p>
                <img className="h-[20px] w-[20px]" src={arrow} alt="react" />
                </button>
            </div>
          </div>
         </div>
      </div>
    </>
   )
}

export default Projects;