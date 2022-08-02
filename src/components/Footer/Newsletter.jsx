import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'> subscribe me</h1>
      <p className="p__openans">texy nvkvjvjmvkl  fjfjmf fjfvnfg </p>

    </div>
    <div className="aapp__newsletter-input flex__center">
      <input type="email" placeholder='enter email' />
      <button className='custom__button'>subscribe</button>
    </div>
  </div>
);

export default Newsletter;
