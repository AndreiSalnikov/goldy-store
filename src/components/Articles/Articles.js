import React from 'react';
import './Articles.scss'
import Article from "../Article/Article";
import articleImg1 from "../../images/articleImg1.jpg";
import articleImg2 from "../../images/articleImg2.jpg";
import articleImg3 from "../../images/articleImg3.jpg";
import articleImg4 from "../../images/articleImg4.jpg";

const Articles = () => {
  return (
    <section className='articles'>
      <div className='articles__top'>
        <h2 className='articles__title'>Статьи</h2>
        <div className='articles__read-more-box'>
        <p className='articles__read-more'>Читать все</p>
        <div className='articles__arrow'></div>
        </div>
      </div>
      <div className='articles__grid'>
        <Article img={articleImg1} title={'Обручальные кольца: тренды 2021'}></Article>
        <Article img={articleImg2} title={'Главные ювелирные тренды года'}></Article>
        <Article img={articleImg3} title={'Жемчуг: 7 малоизвестных фактов о культовом украшении'}></Article>
        <Article img={articleImg4} title={'Как отличить золото от подделки: 10 практических советов'}></Article>
      </div>
    </section>
  );
};

export default Articles;
