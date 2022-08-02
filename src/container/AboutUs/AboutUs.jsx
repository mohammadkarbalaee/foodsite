import React from 'react';
import {images} from "../../constants";

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='#about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G-letter" />


    </div>
    <div className='app__aboutus-content flex__center'>
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">abut</h1>
        <img src={images.spoon} alt="about-spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut magni quisquam porro facilis magnam vel pariatur. Officiis enim molestiae atque nobis at eaque cum, sint nesciunt. Quo natus saepe tenetur.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content_history">
      <h1 className="headtext__cormorant">abut</h1>
        <img src={images.spoon} alt="history-spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut magni quisquam porro facilis magnam vel pariatur. Officiis enim molestiae atque nobis at eaque cum, sint nesciunt. Quo natus saepe tenetur.</p>
        <button type='button' className='custom__button'>know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
