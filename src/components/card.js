import "./styles/cardAnimation.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';

function Card({image}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const moveUp = useTransform(spring, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(spring, [0, 1], ["0%", "100%"]);

  return (
    <motion.div ref={ref} style={{translateY:moveUp, opacity: opacity}}>
      <div id="card">
        <div className="relative">
          <img src={image} alt="Project preview" className="rounded-md"></img>
          <div id="card-shape-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" id="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className="p-7 space-y-5">
          <h1 className="text-3xl font-bold">Project</h1>
          <p>This is the text for the project. It's a small decription for the project</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;