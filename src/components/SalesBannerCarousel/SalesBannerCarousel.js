import React, {useState} from 'react';
import './SalesBannerCarousel.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"

const SalesBannerCarousel = ({children}) => {
  const [offset, setOffset] = useState(0);

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
    <div className='sales-banner-carousel'>
      <div className='sales-banner-carousel__window'>
        <div className='sales-banner-carousel__arrows'>
          <img className='sales-banner-carousel__leftArrow' src={bannerLeftArrow} alt='стрелка влево'
               onClick={handleLeftArrowClick}/>
          <img className='sales-banner-carousel__rightArrow' src={bannerRightArrow} alt='стрелка вправо'
               onClick={handleRightArrowClick}/>
        </div>
        <div className='sales-banner-carousel__all-items-container'
             style={{
               transform: `translateX(${offset}px)`
             }}
        >{children}</div>
      </div>
    </div>
  );
};

export default SalesBannerCarousel;
