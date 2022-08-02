import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from "../../constants";
import './Intro.css';
import data from "../../constants"
import images from '../../constants';

const Intro = () => {
  const [playVideo , setplayVideo ] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) =>(!prevPlayVideo) );
    if (playVideo){
      vidRef.current.pause();
    }
      else{
        vidRef.current.play();
      }
  }
  return(
    <div className='app__video'>
       <div className="app__video-ovelay flex__center">
       <video 
    src={meal}
    ref={vidRef}
    type="video/mp4"
    loop
    controls={false}
    muted
     />
     <div className="app__video-overlay_circle flex__center" onClick={handleVideo} >
     {playVideo ? (
          <BsPauseFill color='black' fontSize={30} />
        ) :<BsFillPlayFill color='black' fontSize={30} />
      }

      </div>
      </div>  
    
  </div>

  );

}
  
export default Intro;
