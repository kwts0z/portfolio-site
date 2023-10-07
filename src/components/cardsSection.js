import React from 'react';
import SlidingCards from './slidingCards';
import universityImg from '../assets/images/university_symbol.png'
import courseraImg from '../assets/images/coursera.png'
import michiganImg from '../assets/images/michigan.png'
import udemyImg from '../assets/images/udemyImg.png'

const CardsSection = () => {
  return (
    <>
      <h1 className='absolute text-9xl font-extrabold justify-start -mt-5 ml-20 tracking-widest'>Education</h1>
      <section className='flex flex-col justify-center items-center m-10 mt-32 space-y-10 pb-20'>
        <SlidingCards icon = {universityImg} title="University Of Pelloponese" text="Department of Informatics and Telecommunications" rightText="Education"/>
        <SlidingCards icon = {courseraImg} title="Meta Front-End Developer Specialization" text="Coursera" rightText="ReactJS Certification"/>
        <SlidingCards icon = {udemyImg} title="C# Unity Game Developer 2D" text="Udemy" rightText="Unity2d Certification"/>
        <SlidingCards icon = {michiganImg}
                      title="Michigan Certificate of English Language proficiency"
                      text="Department of Informatics and Telecommunications"
                      rightText="Language"/>
      </section>
    </>
  );
};

export default CardsSection;
