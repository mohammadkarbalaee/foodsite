import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from "react-icons/md";
import images from "../../constants/images"
import './Navbar.css';

function Navbar(){
  const [toggleMenu , setToggleMenu] = useState(false);
  return(
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">home</a></li>
        <li className='p__opensans'><a href="#about">about</a></li>
        <li className='p__opensans'><a href="#menu">menu</a></li>
        <li className='p__opensans'><a href="#awards">award</a></li>
        <li className='p__opensans'><a href="#contact">contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>login/register</a>
        <div></div>
        <a href="/" className='p__opensans'>Book tabl</a>
      </div>
      <div className="app__navbar-smallscreen">
        
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)} />
     <ul className='app__navbar-smallscreen-links'>
       <li className='p__opensans'><a href="#home">home</a></li>
       <li className='p__opensans'><a href="#about">about</a></li>
       <li className='p__opensans'><a href="#menu">menu</a></li>
       <li className='p__opensans'><a href="#awards">award</a></li>
       <li className='p__opensans'><a href="#contact">contact</a></li>
     </ul>
        
       </div>
        )}
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)} />
      </div>
    </nav>
)
}
;

export default Navbar;
