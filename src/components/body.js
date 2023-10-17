import "./styles/animation.css"
import React, {useEffect} from "react";
import avatar from "../assets/images/avatar.jpeg"
import { init } from "./animation";

function Body() {
  //This way the animation code will run after Body has rendered
  useEffect(() => {
    init();
  }, []);
  return (
    <div id="home" className="flex flex-col justify-center items-center h-full w-full bg-inherit">
      <div className="w-full h-screen" id="stars-bg">
        <canvas className="relative bg-primary" id="stars"></canvas>
      </div>

      <div className="absolute object-cover z-10 flex flex-col justify-center items-center">
        <img className="rounded-full h-64 w-64 md:h-80 md:w-80" src={avatar} alt="My avatar" ></img>
        <p className="text-4xl space-x-4 m-10">
          <span className="text-secondary">" Explore my work as a software developer,</span>
          <span className="text-background">Konstantinos</span>
          <span className="text-secondary">"</span>
        </p>
      </div>
    </div>
  );
}

export default Body;