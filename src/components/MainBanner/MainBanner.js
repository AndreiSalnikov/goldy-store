import React from 'react';
import "./MainBanner.scss"
import bannerRingImg from "../../images/banner__ringImg.png"
import bannerDiamond from "../../images/bannerDiamond.svg"

const MainBanner = () => {
  return (
    <div className='main-banner'>
      <img className='main-banner__diamond' src={bannerDiamond} alt='бриллиант'/>
      <div className='main-banner__text'>
        <h2 className='main-banner__sale'>
          Суперскидка до 60%
        </h2>
        <h1 className='main-banner__productName'>
          НА БРИЛЛИАНТЫ
        </h1>
        <button className='main-banner__moreButton'>
          Подробнее
        </button>
      </div>
      <div className='main-banner__dots'>
        <div className='main-banner__dot'></div>
        <div className='main-banner__dot'></div>
        <div className='main-banner__dot'></div>
      </div>
      <img className='main-banner__ringImg' src={bannerRingImg} alt='кольцо'/>
    </div>
  );
};

export default MainBanner;
