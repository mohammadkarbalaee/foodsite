import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contant" />
      <h1 className="headtext__cormoran" style={{marginBottom:"4rem" , color:"var(--color-golden)"}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ab?</p>
        <p className="p__cormorant" style={{color:"#DCCA87" , margin:"2rem 0"}}></p>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ab?</p>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ab?</p>
      </div>
      <button className='custom__button' style={{marginTop:"2rem"}}>visit us</button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>

    
  </div>
);

export default FindUs;
