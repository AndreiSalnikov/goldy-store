import React from 'react';
import './ProductDay.scss'
import bannerLeftArrow from "../../images/bannerLeftArrow.svg";
import bannerRightArrow from "../../images/bannerRightArrow.svg";
import ProductDayCard from "../ ProductDayCard/ProductDayCard";
const ProductDay = () => {
  return (
    <section className='product-day'>
      <div className='product-day__top'>
        <h2 className='product-day__title'>Товар дня</h2>
        <div>
        <img className='sales__leftArrow' src={bannerLeftArrow} alt='стрелка влево'/>
        <img className='sales__rightArrow' src={bannerRightArrow} alt='стрелка вправо'/>
        </div>
      </div>
      <ProductDayCard productName={'Кольцо из золота с бриллиантами'} code={1012076} sale={15} oldPrice={26000}></ProductDayCard>
    </section>
  );
};

export default ProductDay;
