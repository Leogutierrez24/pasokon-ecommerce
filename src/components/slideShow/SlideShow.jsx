import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import productosBanner from '../assets/images/all-banner.png';
import heroBanner from '../assets/images/hero-banner.png';
import pcsBanner from '../assets/images/pcs-banner.png';
import './slideShow.scss';


const SlideShow = () => {

    return (
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <img src={heroBanner} alt="banner hero" />
          </div>
          <Link className="each-slide" to="/all">
            <img src={productosBanner} alt="productos banner" />
          </Link>
          <Link className="each-slide" to="/category/pc-armadas">
            <img src={pcsBanner} alt="pcs banner" />
          </Link>
        </Slide>
      </div>
    );
}

export default SlideShow;