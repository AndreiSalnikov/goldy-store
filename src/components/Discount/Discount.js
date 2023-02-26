import React from 'react';
import './Discount.scss'
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import discountBannerProductImg1 from "../../images/discountBannerProductImg1.png";
import discountBannerProductImg2 from "../../images/discountBannerProductImg2.png";
import discountBannerProductImg3 from "../../images/discountBannerProductImg3.png";

const Discount = () => {
  return (
    <section className='discount'>
      <div className='discount__grid'>
        <DiscountBanner img={discountBannerProductImg1} title={'Скидки ㅤㅤㅤㅤㅤㅤна все украшения с бриллиантами'} sale={50} color={'#43807F'}></DiscountBanner>
        <DiscountBanner img={discountBannerProductImg2} title={'Скидки ㅤㅤㅤㅤㅤ на кольцаㅤㅤㅤㅤㅤ и браслеты'} sale={40} color={'#E24B33'}></DiscountBanner>
        <DiscountBanner img={discountBannerProductImg3} title={'Скидки ㅤㅤㅤㅤㅤㅤна все украшения с бриллиантами'} sale={60} color={'#E1A661'}></DiscountBanner>
      </div>
    </section>
  );
};

export default Discount;
