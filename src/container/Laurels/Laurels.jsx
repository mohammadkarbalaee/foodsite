import React from 'react';
import { SubHeading } from '../../components';
import { images , data } from '../../constants';
import './Laurels.css';
const AwardCard =({award:{imgUrl , title , subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color:"#DCCA87"}}>
        {title}
      </p>
      <p className="p__cormorant" >
        {subtitle}
      </p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">

    </div>
    <SubHeading title=" awards and recognitions"/>
      <h1 className="headtext__cormorant">our laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award)=><AwardCard award={award} key={award.title} />)}
      </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
