import React, { useState } from 'react';
import './styles/carousel.css';

function ImageSlider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };


  return (
    <div className='relative h-full w-full'>
      <div className='w-full h-full rounded bg-gray-200 bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${slides[currentIndex].url})` }} ></div>
      <div>
        <div className='left-arrow' onClick={goToPrevious}>&lt;</div>
        <div className='dots-container'>
          {slides.map((slide, slideIndex) => {
            if (slideIndex === currentIndex){
              return <div className='dot' key={slideIndex} style={{opacity: 0.9}} onClick={() => goToSlide(slideIndex)}>●</div>
            }else {
              return <div className='dot' key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
            }
          })}
        </div>
        <div className='right-arrow' onClick={goToNext}>&gt;</div>
      </div>
    </div>
  );
}

export default ImageSlider