import React from 'react';
import {images , data} from "../../constants";
import {SubHeading , MenuItem} from "../../components"

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="menu that fill you better"/>
      <h1 className="headtext__cormorant">
        todoya special
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>wine & bear </p>
        <div className="app_specialMenu_menu_items">
          {data.wines.map((wine , index ) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>

          )
            

          )}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>wine  bear </p>
        <div className="app_specialMenu_menu_items">
          {data.cocktails.map((cocktail , index) =>(
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:"15px"}}>
      <button type='button' className='custom__button'>view more</button>

    </div>
    
  </div>
);

export default SpecialMenu;
