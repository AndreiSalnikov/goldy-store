import React from 'react';
import './Article.scss'

const Article = ({img, title}) => {
  const month = [
    'Января', 'Февраля', 'Марта', 'Апреля',
    'Мая', 'Июня', 'Июля', 'Августа', 'Сентября',
    'Октября', 'Ноября', 'Декабря'
  ]
  const date = new Date();
  return (
    <div className='article'>
      <div className='article__img-box'>
      <img className='article__img' src={img} alt=''/>
      </div>
      <span className='article__date'>{date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</span>
      <h2 className='article__title'>{title}</h2>
    </div>
  );
};

export default Article;
