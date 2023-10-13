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

  const moveLeft = useTransform(leftSpring, [0, 1], ["0%", "-47%"]);
  const moveRight = useTransform(rightSpring, [0, 1], ["0%", "47%"]);

  return (
    <div ref={ref} className="relative flex flex-row justify-end items-center w-full h-60 lg:justify-center">
      <motion.div
        style={{ translateX: moveLeft }}
        className={`absolute -mr-[55%] flex flex-row items-center pl-10 p-5 space-x-2 bg-primary rounded-ss-3xl rounded-es-3xl z-10 w-11/12 h-full text-fuchsia-50 lg:w-2/5 lg:mr-0 lg:rounded-3xl `}
      >
        <img src={icon} alt={text + " symbol"} className='h-1/2'></img>
        <div>
          <h1 className='mx-10 my-5 text-xl font-bold xl:text-3xl'>{title}</h1>
          <h2 className='mx-10 my-5 text-lg xl:text-2xl'>{text}</h2>
        </div>

      </motion.div>

      <motion.div
        style={{ translateX: moveRight }}
        className='hidden absolute bg-text justify-center items-center rounded-se-3xl rounded-ee-3xl text-3xl z-20 w-2/5 h-full lg:flex'
      >
        <div className='flex w-full h-full items-center justify-center'>
          <h1 className='mx-10 my-5 text-6xl text-fuchsia-50'>{rightText}</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default SlidingCards;
