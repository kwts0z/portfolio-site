import React from 'react';
import SlidingCards from './slidingCards';
import universityImg from '../assets/images/university_symbol.png'
import courseraImg from '../assets/images/coursera.png'
import michiganImg from '../assets/images/michigan.png'
import udemyImg from '../assets/images/udemyImg.png'

const CardsSection = () => {
  return (
    <div id="education" className='relative flex flex-col w-full h-full'>
      <div className="flex h-full w-full px-5 pt-28 lg:pt-16">
        <h1 className="text-7xl font-extrabold -z-10 text-text lg:text-9xl">Education</h1>
      </div>
      <section className='flex flex-col justify-center items-center m-10  space-y-10 pb-20'>
        <SlidingCards icon = {universityImg} title="University Of Pelloponese" text="Department of Informatics and Telecommunications" rightText="University"/>
        <SlidingCards icon = {courseraImg} title="Meta Front-End Developer Specialization" text="Coursera" rightText="Certification"/>
        <SlidingCards icon = {udemyImg} title="C# Unity Game Developer 2D" text="Udemy" rightText="Certification"/>
        <SlidingCards icon = {michiganImg}
                      title="Certificate of English Language proficiency"
                      text="Michigan"
                      rightText="Language"/>
      </section>
    </div>
  );
};

export default CardsSection;
