
"use client"

import React, { useEffect, useRef } from 'react';
import styles from './Service.module.css';

const image1 = "/winger-13-seater.jpg"; // Assuming images are in the public folder
const image2 = "/winger-side-image.png";
const image3 = "/travellers.png";


const Service = () => {
  const sliderRef = useRef(null);

  // Function to stop the auto-scroll animation when buttons are clicked
  const stopAutoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  // Function to manually scroll the slider
  const handleScroll = (direction) => {
    stopAutoScroll();
    if (sliderRef.current) {
      const currentPosition = sliderRef.current.style.transform || 'translateX(0%)';
      const translateX = parseFloat(currentPosition.replace('translateX(', '').replace('%)', ''));
      const newPosition = direction === 'left' ? translateX + 50 : translateX - 50;
      sliderRef.current.style.transform = `translateX(${newPosition}%)`;
    }
  };

  // Use this to re-enable auto-scroll if needed after a manual scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && sliderRef.current.style.animationPlayState !== 'paused') {
        sliderRef.current.style.transform = `translateX(-50%)`;
      }
    }, 10000); // Adjust this time based on your need
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container} id="service">
       <div>
        Our Buses and Services
       </div>
      <div className={styles.slider} ref={sliderRef}>
        <section className={styles.image} style={{ backgroundImage: `url(${image1})` }}>
          <div className={styles.overlayText}>Winger</div>
        </section>

        <section className={styles.image} style={{ backgroundImage: `url(${image2})` }}>
          <div className={styles.overlayText}>Winger</div>
        </section>

        <section className={styles.image} style={{ backgroundImage: `url(${image3})` }}>
          <div className={styles.overlayText}>Travellers</div>
        </section>
      </div>
      
      {/* Left Arrow Button */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={() => handleScroll('left')}>
        &#8592;
      </button>

      {/* Right Arrow Button */}
      <button className={`${styles.arrow} ${styles.right}`} onClick={() => handleScroll('right')}>
        &#8594;
      </button>
    </div>
  );
};

export default Service;
