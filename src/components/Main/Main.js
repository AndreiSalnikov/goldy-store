import React from 'react';
import MainBanner from "../MainBanner/MainBanner";
import MainBannerCarousel from "../MainBannerCarousel/MainBannerCarousel";
import "./Main.scss"

const Main = () => {
  return (
    <section className='main'>
      <MainBannerCarousel>
        <MainBanner>
        </MainBanner>
        <MainBanner>
        </MainBanner>
        <MainBanner>
        </MainBanner>
      </MainBannerCarousel>
    </section>
  );
};

export default Main;
