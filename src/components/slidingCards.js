import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SlidingCards = ({ icon, title, text, rightText }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const leftSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const rightSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const moveLeft = useTransform(leftSpring, [0, 1], ["0%", "-35%"]);
  const moveRight = useTransform(rightSpring, [0, 1], ["0%", "43%"]);

  return (
    <div ref={ref} className="relative flex flex-row justify-center items-center w-full h-60">
      <motion.div
        style={{ translateX: moveLeft }}
        className='relative flex flex-row items-center p-5 space-x-2 bg-accent-v2 rounded-3xl z-10 w-1/2 h-full '
      >
        <img src={icon} alt={text + " symbol"} className='h-1/2'></img>
        <div>
          <h1 className='mx-10 my-5 text-3xl font-bold'>{title}</h1>
          <h2 className='mx-10 my-5 text-2xl'>{text}</h2>
        </div>

      </motion.div>

      <motion.div
        style={{ translateX: moveRight }}
        className='absolute bg-secondary flex justify-center ml-48 items-center rounded-se-3xl rounded-ee-3xl text-3xl z-20 w-2/5 h-full'
      >
        <h1 className='mx-10 my-5 text-text'>{rightText}</h1>
      </motion.div>
    </div>
  );
};

export default SlidingCards;
