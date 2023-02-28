import React, {useState} from 'react';
import './Header.scss';
import headerGeoLogo from "../../images/header__logo-geo.svg"
import headerPhoneLogo from "../../images/header__logo-phone.svg"
import headerCenterLogo from "../../images/header__centerLogo.svg"
import headerBottomSearchLogo from "../../images/header__bottom-searchLogo.svg"

const Header = () => {
  const [isBurgerClicked,setIsBurgerClicked] = useState(false)
  return (
    <section className={isBurgerClicked ? 'header header_active' :'header'}>
      <div className='header__mobile-logo'>
        <img className='header__centerLogo' src={headerCenterLogo} alt="иконка звонка"/>
        <p className='header__centerTitle'>ювелирный магазин</p>
      </div>
      <div className='header__burger' onClick={()=>setIsBurgerClicked(!isBurgerClicked)}>
        <span className={isBurgerClicked ? 'header__burger-line header__burger-line_active' : 'header__burger-line'}></span>
        <span className={isBurgerClicked ? 'header__burger-line header__burger-line_active' : 'header__burger-line'}></span>
        <span className={isBurgerClicked ? 'header__burger-line header__burger-line_active' : 'header__burger-line'}></span>
      </div>
      <div className={isBurgerClicked ? 'header__full header__full_active' : 'header__full'}>
        <div className='header__top'>
          <div className='header__top-left'>
            <div className='header__logoAndGeo'>
              <img className='header__logo-geo' src={headerGeoLogo} alt="иконка геолокации"/>
              <select className='header__geo'>
                <option>Санкт-Петербург</option>
                <option>Москва</option>
                <option>Нижний Новгород</option>
                <option>Ростов-на-Дону</option>
              </select>
            </div>
            <div className='header__logoAndNumber'>
              <img className='header__logo-phone' src={headerPhoneLogo} alt="иконка звонка"/>
              <p className='header__number'>8 800 785-25-35</p>
            </div>
          </div>
          <div className='header__center'>
            <img className='header__centerLogo' src={headerCenterLogo} alt="иконка звонка"/>
            <p className='header__centerTitle'>ювелирный магазин</p>
          </div>
          <div className='header__rightAuth'>
            <p className='header__rightTitle'>Вход</p>
            <hr className='header__vertical-line'></hr>
            <p className='header__rightTitle'>Регистрация</p>
          </div>
          <div className='header__rightCart'>
            <div className='header__rightLikeLogoBackground'>
              <div className='header__rightLikeLogo'></div>
            </div>
            <div className='header__rightInfoLogoBackground'>
              <div className='header__rightInfoLogo'></div>
            </div>
            <div className='header__rightCartLogoBackground'>
              <div className='header__rightCartLogo'></div>
            </div>
          </div>
        </div>
        <nav className='header__bottom'>
          <ul className='header__bottom-list'>
            <li className='header__bottom-titles'>Каталог</li>
            <li className='header__bottom-titles'>Акции</li>
            <li className='header__bottom-titles'>Бренды</li>
            <li className='header__bottom-titles'>Магазины</li>
            <li className='header__bottom-titles'>О нас</li>
            <li className='header__bottom-titles'>Доставка и оплата</li>
            <li className='header__bottom-titles'>Статьи</li>
          </ul>
          <div className='header__bottom-search'>
            <img className='header__bottom-searchLogo' src={headerBottomSearchLogo} alt='иконка поиска'/>
            <input className='header__bottom-searchInput' placeholder='Поиск по сайту'/>
          </div>
        </nav>
      </div>

    </section>
  );
};

export default Header;
