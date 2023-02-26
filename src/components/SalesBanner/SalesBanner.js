import React, {useState} from 'react';
import './SalesBanner.scss'


const SalesBanner = ({isSale, isBestseller, productImg, oldPrice, sale}) => {
  const [isBannerClicked, setIsBannerClicked] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  return (
    <div className={isBannerClicked ? 'salesBanner salesBanner_active' : 'salesBanner'}
      onMouseEnter={() => setIsBannerClicked(true)}
      onMouseLeave={() => setIsBannerClicked(false)}>
      <div className='salesBanner__specialMark'>
        <div className={isSale ? 'salesBanner__saleIcon salesBanner__saleIcon_active' : 'salesBanner__saleIcon'}>Sale
        </div>
        <div
          className={isBestseller ? (isSale ? 'salesBanner__bestsellerIcon salesBanner__bestsellerIcon_active' : 'salesBanner__bestsellerIcon salesBanner__bestsellerIconTwo salesBanner__bestsellerIcon_active') : 'salesBanner__bestsellerIcon'}>Хит
        </div>
      </div>
      <div className={isLikeClicked ? 'salesBanner__likeImg salesBanner__likeImg_active' : 'salesBanner__likeImg'}  onClick={() => setIsLikeClicked(!isLikeClicked)}></div>
      <div className='salesBanner__eyeImg'></div>
      <img className='salesBanner__productImg' src={productImg} alt='картинка товара'/>
      <div className='salesBanner__prices'>
        <div className='salesBanner__newPrice'>{sale ? oldPrice * ((100 - sale) * 0.01) + '₽' : oldPrice + '₽'}</div>
        <div
          className={sale ? 'salesBanner__oldPrice salesBanner__oldPrice_active' : 'salesBanner__oldPrice'}>{oldPrice + '₽'}</div>
        <div
          className={sale ? 'salesBanner__percentSale salesBanner__percentSale_active' : 'salesBanner__percentSale'}>{'-' + sale + '%'}</div>
      </div>
      <h2 className='salesBanner__title'>Стильное кольцо из белого золота <br/> c бриллиантами</h2>
        <select className={isBannerClicked ? 'salesBanner__metals salesBanner__metals_active' : 'salesBanner__metals'}>
          <option className='salesBanner__metal'>Белое золото</option>
          <option className='salesBanner__metal'>Желтое золото</option>
          <option className='salesBanner__metal'>Серебро</option>
        </select>
        <select className={isBannerClicked ? 'salesBanner__metals salesBanner__metals_active' : 'salesBanner__metals'}>
          <option className='salesBanner__metal'>Размер: 16</option>
          <option className='salesBanner__metal'>Размер: 16,5</option>
          <option className='salesBanner__metal'>Размер: 17</option>
          <option className='salesBanner__metal'>Размер: 17,5</option>
          <option className='salesBanner__metal'>Размер: 18</option>
          <option className='salesBanner__metal'>Размер: 19</option>
        </select>
    </div>
  );
};

export default SalesBanner;
