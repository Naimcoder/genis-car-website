import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from '../../../../assets/images/banner/1.jpg'
import slider2 from '../../../../assets/images/banner/2.jpg'
import slider3 from '../../../../assets/images/banner/3.jpg'
import slider4 from '../../../../assets/images/banner/4.jpg'
import slider5 from '../../../../assets/images/banner/5.jpg'
import slider6 from '../../../../assets/images/banner/6.jpg'
import './Banner.css'
import BannerSlider from './BannerSlider';

const Banner = () => {
  const bannerData= [
      {
        image: slider1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slider3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: slider4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: slider5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: slider6,
        prev: 5,
        id: 6,
        next: 1
    }
  ]
    return (
  <div>

 <div className="carousel w-full py-10">
  {
    bannerData.map(slide=><BannerSlider key={slide.id} slider={slide}></BannerSlider>)
  }

</div>
   </div>
    );
};

export default Banner;