import React, {useState} from 'react';
import './MainBannerCarousel.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"

const MainBannerCarousel = ({children}) => {

  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 1300;
      return Math.min(newOffset, 0);
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 1300;
      const maxOffset = -(1300 * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    })
  }
  return (
    <div className='main-banner-carousel'>
      <div className='main-banner-carousel__window'>
        <img className='main-banner-carousel__leftArrow' src={bannerLeftArrow} alt='стрелка влево' onClick={handleLeftArrowClick}/>
        <div className='main-banner-carousel__all-items-container'
             style={{
               transform: `translateX(${offset}px)`
             }}
        >{children}</div>
        <img className='main-banner-carousel__rightArrow' src={bannerRightArrow} alt='стрелка вправо'
             onClick={handleRightArrowClick}/>
        <div className='main-banner-carousel__dots'>
          <div className={offset === 0 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
          <div className={offset === -1300 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
          <div className={offset < -1300 ? 'main-banner-carousel__dot main-banner-carousel__dot_active' : 'main-banner-carousel__dot'}></div>
        </div>
      </div>

    </div>
  );
};

export default MainBannerCarousel;

