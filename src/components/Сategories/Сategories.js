import React from 'react';
import CategoriesBanner from "../CategoriesBanner/CategoriesBanner";
import "./Categories.scss"
import categoriesBannerRings from "../../images/categoriesBannerRings.png"
import categoriesBannerEarrings from "../../images/categoriesBannerEarrings.png"
import categoriesBannerEngagementRings from "../../images/categoriesBannerEngagementRings.png"
import categoriesBannerBracelets from "../../images/categoriesBannerBracelets.png"
import categoriesBannerNecklaces from "../../images/categoriesBannerNecklaces.png"
import categoriesBannerWatches from "../../images/categoriesBannerWatches.png"


const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='categories__title'>Популярные категории</h2>
      <div className='categories__grid'>
        <CategoriesBanner productImg={categoriesBannerRings} productName={'Кольца'}>
        </CategoriesBanner>
        <CategoriesBanner productImg={categoriesBannerEarrings} productName={'Серьги'}>
        </CategoriesBanner>
        <CategoriesBanner productImg={categoriesBannerEngagementRings} productName={'Помолвочные кольца'}>
        </CategoriesBanner>
        <CategoriesBanner productImg={categoriesBannerBracelets} productName={'Браслеты'}>
        </CategoriesBanner>
        <CategoriesBanner productImg={categoriesBannerNecklaces} productName={'Колье и подвески'}>
        </CategoriesBanner>
        <CategoriesBanner productImg={categoriesBannerWatches} productName={'Часы'}>
        </CategoriesBanner>
      </div>

    </section>
  );
};

export default Categories;
