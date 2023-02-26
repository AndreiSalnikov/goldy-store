import React from 'react';
import "./Baner.scss"
import bannerRingImg from "../../images/banner__ringImg.png"
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerDiamond from "../../images/bannerDiamond.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"
const Banner = () => {
  return (
    <div className='banner'>
      <img className='banner__leftArrow' src={bannerLeftArrow} alt='стрелка влево'/>
      <img className='banner__diamond' src={bannerDiamond} alt='бриллиант'/>
      <div className='banner__text'>
        <h2 className='banner__sale'>
          Суперскидка до 60%
        </h2>
        <h1 className='banner__productName'>
          НА БРИЛЛИАНТЫ
        </h1>
        <button className='banner__moreButton'>
          Подробнее
        </button>
      </div>
      <div className='banner__dots'>
        <div className='banner__dot'></div>
        <div className='banner__dot'></div>
        <div className='banner__dot'></div>
      </div>
      <img className='banner__ringImg' src={bannerRingImg} alt='кольцо'/>
      <img className='banner__rightArrow' src={bannerRightArrow} alt='стрелка вправо'/>
    </div>
  );
};

export default Banner;
