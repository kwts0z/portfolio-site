import "./animation.css"
import React, {useEffect} from "react";
import avatar from "../assets/images/avatar.jpeg"
import { init } from "./animation";

function Body() {
  //This way the animation code will run after Body has rendered
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <canvas id="stars"></canvas>
      <div className="absolute object-cover z-10 flex flex-col justify-center items-center">
        <img className="rounded-full h-64 w-64" src={avatar} alt="My avatar" ></img>
        <h1 className="text-3xl space-x-4 m-10">
          <span className="text-text">Hi, my name is</span>
          <span className="text-accent">Konstantinos Giannopoulos</span>
          <span className="text-text">and i develop websites!</span>
        </h1>
      </div>

    </div>
  );
}

export default Body;