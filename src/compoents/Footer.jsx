import React from "react";

const Footer = () => {
    return (
        <>
         <div className=" flex items-center justify-center py-[100px]">
            <div className="grid grid-cols-2 w-[80%] border-line">
                <div className=" flex items-center justify-center">
                    <div className=" text-left w-[474px] flex flex-col gap-[14px]">
                      <p className="text-[24px] max-xl:text-sm  font-[600]">Open for Freelance & Projects</p>
                      <h1 className="decorate-txt md:leading-[40px] text-[32px] max-xl:text-sm  font-[600]">Got a project or idea? I’d love to hear from you.</h1>
                      <button className="techs-button w-fit text-[24px] max-xl:text-sm  font-[600] border rounded-[15px] px-[13px] py-[8px]">Let's Connect</button>
                    </div>
                </div>
                <div className="flex items-end justify-center ">
                    <div className="w-[60%] flex justify-around gap-2">
                    <div className="text-left foot-text text-[16px] max-xl:text-sm  font-[600]">
                        <ul>
                            <li>
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
  Github
</a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
                            </li>
                            <li>View resume</li>
                        </ul>
                        
                    </div>
                    <div className="text-left foot-text text-[16px] max-xl:text-sm  font-[600]">
                        <ul>
                            <li>About</li>
                            <li>Home</li>
                            <li>Contact me</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
           
         </div>
        </>
    )
}

export default Footer;