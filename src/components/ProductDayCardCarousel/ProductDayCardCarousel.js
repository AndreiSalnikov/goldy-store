import React, {useState} from 'react';
import './ProductDayCardCarousel.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"
const ProductDayCardCarousel = ({children}) => {
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
    <div className='product-day-card-carousel'>
      <div className='product-day-card-carousel__window'>
        <div className='product-day-card-carousel__arrows'>
        <img className='product-day-card-carousel__leftArrow' src={bannerLeftArrow} alt='стрелка влево' onClick={handleLeftArrowClick}/>
        <img className='product-day-card-carousel__rightArrow' src={bannerRightArrow} alt='стрелка вправо'
             onClick={handleRightArrowClick}/>
          </div>
        <div className='product-day-card-carousel__all-items-container'
             style={{
               transform: `translateX(${offset}px)`
             }}
        >{children}</div>

      </div>
    </div>
  );
};

export default ProductDayCardCarousel;
