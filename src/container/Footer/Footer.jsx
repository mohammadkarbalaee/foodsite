import React from 'react';
import { FooterOverlay , Newsletter } from '../../components';
import './Footer.css';
import {FiFacebook , FiInstagram , FiTwitter} from "react-icons/fi"
import { images } from '../../constants';
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headte">contact us</h1>
        <p className="p__opensans">this adress</p>
        <p className="p__opensans">phone number</p>
        <p className="p__opensans">second phone number</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          onmxxcnm cdjcd ncd cdjdcn diejm gwstfwdtfedui

        </p>
        <img src={images.spoon} alt="" className='spoon__img' style={{marginTop:"15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headte">working hours</h1>
        <p className="p__opensans">monday-friday</p>
        <p className="p__opensans">hour workingr</p>
        <p className="p__opensans">second phone number</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="P__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, beatae labore quia maxime perferendis velit voluptatum aliquid accusantium pariatur! Quisquam quos saepe totam ipsam eligendi voluptatem ad autem tempore optio.</p>
    </div>
  </div>
);

export default Footer;
