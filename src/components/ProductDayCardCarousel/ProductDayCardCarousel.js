import React, {useRef, useState} from 'react';
import './ProductDayCardCarousel.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"
const ProductDayCardCarousel = ({children}) => {
  const widthBanner = useRef();
  const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + widthBanner.current.offsetWidth;
      return Math.min(newOffset, 0);
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - widthBanner.current.offsetWidth;
      const maxOffset = -(widthBanner.current.offsetWidth * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    })
  }

  return (
    <div className='product-day-card-carousel'>
      <div className='product-day-card-carousel__window'>
        <div className='product-day-card-carousel__arrows'>
        <img className='product-day-card-carousel__leftArrow' src={bannerLeftArrow} alt='стрелка влево' onClick={handleLeftArrowClick}/>
        <img className='product-day-card-carousel__rightArrow' src={bannerRightArrow} alt='стрелка вправо'
             onClick={handleRightArrowClick}/>
          </div>
        <div ref={widthBanner} className='product-day-card-carousel__all-items-container'
             style={{
               transform: `translateX(${offset}px)`
             }}
        >{children}</div>

      </div>
    </div>
  );
};

export default ProductDayCardCarousel;
