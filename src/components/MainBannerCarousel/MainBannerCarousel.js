import React, {useRef, useState} from 'react';
import './MainBannerCarousel.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"

const MainBannerCarousel = ({children}) => {
  const widthBanner = useRef();
  const [offset, setOffset] = useState(0)
  const [count, setCount] = useState(0)

  const handleLeftArrowClick = () => {
    if (count !== 0)
    {setCount(count - 1)}
    setOffset((currentOffset) => {
      const newOffset = currentOffset + widthBanner.current.offsetWidth;
      return Math.min(newOffset, 0);
    })
  }

  const handleRightArrowClick = () => {
    if (count !== 2)
    {setCount(count + 1)}
    setOffset((currentOffset) => {
      const newOffset = currentOffset - widthBanner.current.offsetWidth;
      const maxOffset = -(widthBanner.current.offsetWidth * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    })
  }
  return (
    <div className='main-banner-carousel'>
      <div className='main-banner-carousel__window'>
        <img className='main-banner-carousel__leftArrow' src={bannerLeftArrow} alt='стрелка влево' onClick={handleLeftArrowClick}/>
        <div ref={widthBanner} className='main-banner-carousel__all-items-container'
             style={{
               transform: `translateX(${offset}px)`
             }}
        >{children}</div>
        <img className='main-banner-carousel__rightArrow' src={bannerRightArrow} alt='стрелка вправо'
             onClick={handleRightArrowClick}/>
        <div className='main-banner-carousel__dots'>
          <div className={count === 0 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
          <div className={count === 1 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
          <div className={count === 2 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
        </div>
      </div>

    </div>
  );
};

export default MainBannerCarousel;

