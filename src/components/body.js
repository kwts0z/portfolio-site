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
        <img className="rounded-full h-80 w-80" src={avatar} alt="My avatar" ></img>
        <h1 className="text-4xl space-x-4 m-10">
          <span className="text-secondary">Hi, my name is</span>
          <span className="text-background">Konstantinos Giannopoulos</span>
          <span className="text-secondary">I design and develop things!</span>
        </h1>
      </div>
    </div>
  );
}

export default Body;