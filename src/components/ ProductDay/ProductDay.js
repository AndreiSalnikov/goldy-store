import React from 'react';
import './ProductDay.scss'
import ProductDayCard from "../ ProductDayCard/ProductDayCard";
import ProductDayCardCarousel from "../ProductDayCardCarousel/ProductDayCardCarousel";

const ProductDay = () => {
  return (
    <section className='product-day'>
      <div className='product-day__top'>
        <h2 className='product-day__title'>Товар дня</h2>
      </div>
      <ProductDayCardCarousel>
        <ProductDayCard productName={'Кольцо из золота с бриллиантами'} code={1012076} sale={15}
                        oldPrice={26000}></ProductDayCard>
        <ProductDayCard productName={'Кольцо из золота с бриллиантами'} code={1012076} sale={15}
                        oldPrice={26000}></ProductDayCard>
        <ProductDayCard productName={'Кольцо из золота с бриллиантами'} code={1012076} sale={15}
                        oldPrice={26000}></ProductDayCard>
      </ProductDayCardCarousel>
    </section>
  );
};

export default ProductDay;
