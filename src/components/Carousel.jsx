import React, { useEffect, useState } from 'react';
import './Carousel.css'

const Carousel = ({images, interval = 4000, height = '400px', showIndicators=true})=> {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationEnabled, setAnimationEnabled] = useState(false);
    const extendedImages = [...images, images[0]];

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrentIndex((previousIndex)=>
                previousIndex + 1
            );
            setAnimationEnabled(true)
        }, interval);
        return ()=>clearInterval(timer)
    }, [images.length, interval]);
    useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-enable animation and clamp index
        setAnimationEnabled(true);
        setCurrentIndex((prev) => (prev >= images.length ? 0 : prev));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [images.length]);


    const handleTransitionEnd = ()=>{
        if(currentIndex === images.length){
            setAnimationEnabled(false);
            setCurrentIndex(0);
        }
    }

    return (
  <div className='carousel-container' style={{ height: height || '400px'}}>
    <div className='carousel-slider' 
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: animationEnabled ? 'transform 4.1s ease' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
          >
    
    {extendedImages.map((img, index)=>{
        return (
        <img
        key={index}
      src={img}
      alt={`Slide ${index}`}
      className='carousel-image'
    />
        )

    })}

    </div>
    
    

    {showIndicators && (
      <div className='carousel-indicators'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    )}
  </div>
);


}

export default Carousel;