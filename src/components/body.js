import React from "react";
import avatar from "../assets/images/avatar.png"
import NewAnimation from "./newAnimation";

function Body() {
  return (
    <div id="home" className="flex flex-col justify-center items-center h-full w-full bg-inherit">
      <div className="w-full h-full">
        <NewAnimation/>
      </div>
      <div className="absolute flex flex-col w-full z-10 justify-center items-center text-center">
        <div className="flex relative rounded-full bg-white h-64 w-64 md:h-80 md:w-80 overflow-hidden">
          <img className="scale-125 pb-4 pl-3" src={avatar} alt="My avatar" ></img>
        </div>
        <p className="flex flex-wrap text-4xl pt-20 items-center justify-center">
          <span className="text-secondary">"Explore my work as a software developer,&nbsp;</span>
          <span className="text-background">Konstantinos</span>
          <span className="text-secondary">"</span>
        </p>
      </div>
      <div className="divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
      </div>
    </div>
  );
}

export default Body;