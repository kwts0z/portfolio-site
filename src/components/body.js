import "./animation.css"
import React, {useEffect} from "react";
import avatar from "../assets/images/avatar.jpeg"
import { init } from "./animation";
import Navbar from './navbar';

function Body() {
  //This way the animation code will run after Body has rendered
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <canvas className="custom-curve bg-indigo-900" id="stars"></canvas>
        <div class="custom-shape-divider-bottom-1696327844">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="absolute object-cover z-10 flex flex-col justify-center items-center">
        <img className="rounded-full h-64 w-64" src={avatar} alt="My avatar" ></img>
        <h1 className="text-3xl space-x-4 m-10">
          <span className="text-text">Hi, my name is</span>
          <span className="text-accent">Konstantinos Giannopoulos</span>
          <span className="text-text">I design and develop things!</span>
        </h1>
      </div>
    </div>
  );
}

export default Body;