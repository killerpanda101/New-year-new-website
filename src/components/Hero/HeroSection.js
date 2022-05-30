import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';





function HeroSection() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' type="video/mp4" autoPlay loop muted playsinline/>
      <h1>CODING THROUGH THE NIGHT TO BRING IDEAS TO LIGHT.</h1>
      <p>With some inspiration, my programming skills, and a hefty amount of coffee, I aim to build projects that are mostly useful but sometimes not.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          Sound interesting? Let's be friends!
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
