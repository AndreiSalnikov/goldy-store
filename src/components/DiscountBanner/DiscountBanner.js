import React from 'react';
import "./DiscountBanner.scss"
const DiscountBanner = ({title,img,sale, color}) => {
  return (
    <div className='discount-banner'>
      <div className='discount-banner__diamond'></div>
      <img className='discount-banner__product' src={img} alt='изображение продукта'/>
      <p className='discount-banner__title'>{title}</p>
      <h2 className='discount-banner__discount' style={{background: `${color}`}}>
        <p className='discount-banner__pretitle'>
          До
        </p>
        <p className='discount-banner__sale'>-{sale}%</p></h2>
    </div>
  );
};

export default DiscountBanner;
