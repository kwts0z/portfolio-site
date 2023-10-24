import "./styles/cardAnimation.css";
import ReactPlayer from 'react-player';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import ImageSlider from "./carousel";
import skoteImage from "../assets/images/skote-site-1.png"
import skoteImage2 from "../assets/images/skote-site-2.png"
import skoteImage3 from "../assets/images/skote-site-3.png"
import skoteImage4 from "../assets/images/skote-site-4.png"

function Card({image, video, title, subtitle}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const moveUp = useTransform(spring, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(spring, [0, 1], ["0%", "100%"]);

  if (image) {
    return (
      <motion.div ref={ref} style={{translateY:moveUp, opacity: opacity}}>
        <div id="card">
          <div className="relative w-full h-1/2 px-1 pt-1">
            <ImageSlider slides={image}/>
            <div id="card-shape-divider">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" id="shape-fill"></path>
              </svg>
            </div>
          </div>
          <div className="relative w-full pt-5 px-7 mb-5 space-y-5 overflow-y-auto">
            <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </motion.div>
    );
  }
  else {
    return (
      <motion.div ref={ref} style={{translateY:moveUp, opacity: opacity}}>
        <div id="card">
          <div className="relative w-full h-1/2 px-1 pt-1">
            <div className="w-full h-full bg-gray-200 rounded-t-md pt-5"><ReactPlayer width='100%' height='90%' url={video} controls={true}/></div>
            
            <div id="card-shape-divider">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" id="shape-fill"></path>
              </svg>
            </div>
          </div>
          <div className="relative w-full pt-5 px-7 mb-5 space-y-5 overflow-y-auto">
            <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </motion.div>
    );
  }

}

export default Card;