import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import { BsInstagram , BsArrowLeftShort , BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = ({}) => {
  const scrollRef =React.useRef(null);
  const scroll = (direction) => {
    const{current} = scrollRef;
    if(direction=="left"){
      current.scrollLeft -=300;
    }
    else{
      current.scrollRight +=300;
    }
  };
  const Galleryimages =[images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04]


  
  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading  title="instagram"/>
        <h1 className="headtext__cormorant">Photo gallery</h1>
        <p className="p__opensa" style={{color:"#AAA" , marginTop:"2rem"}}>lorem sopy bhg gjzm,vv vjgmg pppgpf jjdhWGHZHBJMXJCXJ JHJXJH</p>
        <button type='button' className='custom__button'>view more</button>

      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {Galleryimages.map((image , index)=>(
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="" />
              <BsInstagram className='gallery__image-icon'/>

            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort  className='gallery__arrow-icon' onClick={()=>scroll("left")}/>
          <BsArrowRightShort  className='gallery__arrow-icon' onClick={()=>scroll("Right")}/>

        </div>
      </div>
      


    </div>

  );
}

export default Gallery;
