import React, {useState} from 'react';
import './ProductDayCard.scss'
import Timer from "../Taimer/Timer";
import productDayCardImg from '../../images/productDayCardImg.png'
const ProductDayCard = ({productName, code, sale, oldPrice}) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60000); // 10 minutes timer
  const [isLikeClicked, setIsLikeClicked] = useState(false)
  const [isBuyClicked, setIsBuyClicked] = useState(false);
  const [isFastBuyClicked, setIsFastBuyClicked] = useState(false);
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [IsQuestionMarkClicked,setIsQuestionMarkClicked] = useState(false)
  const handleSizeClick = (event) => {
    setActiveSize(event.target.id);
  }

  const handleColorClick = (event) => {
    setActiveColor(event.target.id);
  }

  return (
    <div className='product-day-card'>
      <div className='product-day-card__left'>
        <div className='product-day-card__special-mark'>
        <p className='product-day-card__mark grey-blue'>New</p>
        <p className='product-day-card__mark semi-orange'>Хит</p>
        <p className='product-day-card__mark blue'>Sale</p>
        </div>
        <img className='product-day-card__img' src={productDayCardImg} alt='картинка товара'/>
      </div>
      <div className='product-day-card__right'>
        <div className='product-day-card__rating'>
          <div className='product-day-card__gold-star'></div>
          <div className='product-day-card__gold-star'></div>
          <div className='product-day-card__gold-star'></div>
          <div className='product-day-card__gold-star'></div>
          <div className='product-day-card__empty-star'></div>
          <p className='product-day-card__numbers'>4,2</p>
        </div>
        <h2 className='product-day-card__title'>{productName}</h2>
        <p className='product-day-card__code'>Артикул: {code}</p>
        <div className='product-day-card__price'>
          <p className='product-day-card__new-price'>{sale ? oldPrice * ((100 - sale) * 0.01) + '₽' : oldPrice + '₽'}</p>
          <p  className={sale ? 'product-day-card__old-price product-day-card__old-price_active' : 'product-day-card__old-price'}>{oldPrice + '₽'}</p>
          <div className={sale ? 'product-day-card__percent-sale product-day-card__percent-sale_active' : 'product-day-card__percent-sale'}>{'-' + sale + '%'}</div>
          <Timer expiryTimestamp={time}></Timer>
        </div>
        <p className='product-day-card__color-title'>Цвет</p>
        <div className='product-day-card__colors-list'>
          <button id={'1'} className={activeColor === "1" ? "product-day-card__color product-day-card__color_active grey" : 'product-day-card__color grey'} onClick={handleColorClick}></button>
          <button id={'2'} className={activeColor === "2" ? "product-day-card__color product-day-card__color_active yellow" : 'product-day-card__color yellow'} onClick={handleColorClick}></button>
          <button id={'3'} className={activeColor === "3" ? "product-day-card__color product-day-card__color_active orange" : 'product-day-card__color orange'} onClick={handleColorClick}></button>
          <button id={'4'} className={activeColor === "4" ? "product-day-card__color product-day-card__color_active green" : 'product-day-card__color green'} onClick={handleColorClick}></button>
        </div>
        <div className='product-day-card__size-title-box'>
          <p className='product-day-card__size-title'>размер</p>
          <div className='product-day-card__size-info'
               onMouseEnter={() => setIsQuestionMarkClicked(true)}
               onMouseLeave={() => setIsQuestionMarkClicked(false)}
          >
              <p className='product-day-card__text'>Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений.</p>
          </div>
        </div>
        <div className='product-day-card__size-list'>
          <button id={'1'} className={activeSize === "1" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>15,5</button>
          <button id={'2'} className={activeSize === "2" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>16</button>
          <button id={'3'} className={activeSize === "3" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>16,5</button>
          <button id={'4'} className={activeSize === "4" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>17</button>
          <button id={'5'} className={activeSize === "5" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>17,5</button>
          <button id={'6'} className={activeSize === "6" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>18</button>
          <button id={'7'} className={activeSize === "7" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>18,5</button>
          <button id={'8'} className={activeSize === "8" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>19</button>
          <button id={'9'} className={activeSize === "9" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>19,5</button>
          <button id={'10'} className={activeSize === "10" ? "product-day-card__size product-day-card__size_active" : 'product-day-card__size'} onClick={handleSizeClick}>20</button>
        </div>
        <div className='product-day-card__navigation'>
          <div className='product-day-card__buy-box'>
            <button className={isBuyClicked ? 'product-day-card__buy product-day-card__buy_active' : 'product-day-card__buy'} onClick={()=>setIsBuyClicked(true)}>в корзину</button>
            <button className={isFastBuyClicked ? 'product-day-card__buy-fast product-day-card__buy-fast_active' : 'product-day-card__buy-fast'} onClick={()=>setIsFastBuyClicked(true)}>купить в 1 клик</button>
          </div>
          <div className='product-day-card__info-box'>
            <div className={isLikeClicked ? 'product-day-card__save-box product-day-card__save-box_active' : 'product-day-card__save-box'} onClick={()=>setIsLikeClicked(!isLikeClicked)}>
              <div className={isLikeClicked ? 'product-day-card__like product-day-card__like_active ' : 'product-day-card__like'}></div>
              <p className='product-day-card__like-title'>Сохранить</p>
            </div>
            <div className='product-day-card__compare-box'>
              <div className='product-day-card__compare'></div>
              <p className='product-day-card__compare-title'>Сравнить</p>
            </div>
            <div className='product-day-card__share-box'>
              <div className='product-day-card__share'></div>
              <p className='product-day-card__share-title'>Поделиться</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDayCard;
