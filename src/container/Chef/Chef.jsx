import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div>
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="chef's words" />
        <h1 className='headtext__cormorant'>What we live for</h1>
        <div className='app__chef-content'>
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="" />
            <p className='p__opensans'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur sit fuga placeat, deleniti et odit odio ipsa fugiat a nulla ab neque assumenda nostrum saepe quia soluta praesentium molestias. Maiores.
            </p>
          </div>
         
        </div>
      </div>
      <div className="app_chef-sign">
        <p>kevin</p>
        <p className="p__opensans">chef and founder </p>
        <img src={images.sign} alt="" />
        
      </div>
    </div>
  </div>
);

export default Chef;
