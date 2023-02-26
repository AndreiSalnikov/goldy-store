import React from 'react';
import "./CategoriesBaner.scss"
const CategoriesBanner = ({productImg, productName}) => {
  return (
    <div className='categoriesBanner'>
      <img className='categoriesBanner__productImg' src={productImg} alt='картинка товара'/>
      <h3 className='categoriesBanner__title'>{productName}</h3>
    </div>
  );
};

export default CategoriesBanner;
