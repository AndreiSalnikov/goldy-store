import React from 'react';
import "./Sales.scss"
import SalesBanner from "../SalesBanner/SalesBanner";
import bannerLeftArrow from "../../images/bannerLeftArrow.svg"
import bannerRightArrow from "../../images/bannerRightArrow.svg"
import salesBannerProductImg1 from "../../images/salesBannerProductImg1.png"
import salesBannerProductImg2 from "../../images/salesBannerProductImg2.png"
import salesBannerProductImg3 from "../../images/salesBannerProductImg3.png"
import salesBannerProductImg4 from "../../images/salesBannerProductImg4.png"

const Sales = () => {
  return (
    <section className='sales'>
      <h2 className='sales__title'>Распродажа</h2>
      <div className='sales__top'>
        <ul className='sales__navigate'>
          <li className='sales__buttons'>
            <button className='sales__button'>Кольца</button>
          </li>
          <li className='sales__buttons'>
            <button className='sales__button'>Серьги</button>
          </li>
          <li className='sales__buttons'>
            <button className='sales__button'>Браслеты</button>
          </li>
          <li className='sales__buttons'>
            <button className='sales__button'>Часы</button>
          </li>
        </ul>
        <img className='sales__leftArrow' src={bannerLeftArrow} alt='стрелка влево'/>
        <img className='sales__rightArrow' src={bannerRightArrow} alt='стрелка вправо'/>
      </div>
      <div className='sales__grid'>
        <SalesBanner isSale={true} isBestseller={true} productImg={salesBannerProductImg1} oldPrice={65000}
                     sale={45}></SalesBanner>
        <SalesBanner isSale={false} isBestseller={true} productImg={salesBannerProductImg2} oldPrice={56000}
                     sale={0}></SalesBanner>
        <SalesBanner isSale={false} isBestseller={false} productImg={salesBannerProductImg3} oldPrice={37500}
                     sale={0}></SalesBanner>
        <SalesBanner isSale={true} isBestseller={false} productImg={salesBannerProductImg4} oldPrice={39200}
                     sale={0}></SalesBanner>
      </div>
    </section>
  );
};

export default Sales;
