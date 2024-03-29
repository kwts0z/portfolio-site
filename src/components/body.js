import React from "react";
import avatar from "../assets/images/avatar.png"
import NewAnimation from "./newAnimation";

function Body() {
  return (
    <div id="home" className="flex flex-col justify-center items-center h-full w-full bg-inherit">
      <div className="w-full h-screen">
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
      
    </div>
  );
}

export default Body;