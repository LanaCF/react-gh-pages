import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faBars, faMagnifyingGlass, faRectangleList, faB, faBell, faHeart, faBasketShopping, faGlobe, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Window from './components/Window';

const App = () => {
  const [activeWindow, setActiveWindow] = useState(null);

  const toggleModal = (windowType) => {
    setActiveWindow(windowType === activeWindow ? null : windowType);
  }

  return (
    <div className="container">
      <header className='header'>
        <div onClick={() => toggleModal('bar')} className="header-icon-bar">
          <FontAwesomeIcon icon={ faBars } className="text-white icon" />
        </div>

        <a href="#" className='logo'>
          <img src="/img/logo.svg" alt="" />
        </a>

        <button onClick={() => toggleModal('catalog')} className='btn-catalog'>
          <FontAwesomeIcon icon={ faWindowRestore } className="text-white icon-catalog" />
          Каталог
        </button>

        <div className="form-search">
          <div className="form-search__box-icon-search">
            <FontAwesomeIcon icon={ faMagnifyingGlass } className='icon-search'/>
          </div>
          
          <input type="text" placeholder="Я шукаю..." className="form-search__input" />

          <div className="form-search__box-icon-search mphone">
            <FontAwesomeIcon icon={ faMicrophone } className='' />
          </div>

          <button className='form-search__btn'>
            Знайти
          </button>
        </div>

        <ul className="header-menu">
          <li className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faGlobe } className="text-white icon" />
            </a>
          </li>

          <li className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faRectangleList } className="text-white icon" />
            </a>
          </li>

          <li className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faB } className="text-white icon" />
            </a>
          </li>

          <li className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faBell } className="text-white icon" />
            </a>
          </li>

          <li className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faHeart } className="text-white icon" />
            </a>
          </li>

          <li onClick={() => toggleModal('basket')} className="header-menu__list">
            <a href="#" className="header-menu__link">
              <FontAwesomeIcon icon={ faBasketShopping } className="text-white icon" />
            </a>
          </li>
        </ul>
      </header>

      <div onClick={() => toggleModal('bar')} className={`modal-window ${activeWindow === 'bar' ? "active" : "hidden"}`}>
        <Window type="bar" />
      </div>

      <div onClick={() => toggleModal('catalog')} className={`modal-window ${activeWindow === 'catalog' ? "active" : "hidden"}`}>
        <Window type="catalog" />
      </div>

      <div onClick={() => toggleModal('basket')} className={`modal-window ${activeWindow === 'basket' ? "active" : "hidden"}`}>
        <Window type="basket" />
      </div>
    </div>
  );
}

export default App;













// <div className="container">
    //   <div className="main_menu" id="home">
    //     <Menu type="header"/>
    //   </div>

    //   <header className="header">
    //     <div className="header__title">
    //       <h1>
    //         TRAVELING
    //       </h1>

    //       <p className="header__text">
    //         ADVENTURES AWAIT YOU!
    //       </p>
    //     </div>

    //     <div className="header__img"></div>
    //   </header>

    //   <main className="main">
    //     <div className="main__text" id="about">
    //       <h2>
    //         ABOUT US
    //       </h2>

    //       <p className="about">
    //         Lorem ipsum dolor sit amet 
    //       </p>
    //     </div>

    //     <div className="gallery" id="gallery">
    //       <GalleryBox />
    //     </div>

    //     <div className="blog" id="blog">
    //       <Posts />
    //     </div>
    //   </main>

    //   <footer className="footer" id="contacts">
    //     <Menu type="footer"/>

    //     <div className="footer__contacts">
    //       <p className="footer__contacts_text">
    //         75 3rd Ave, New York, NY 10003, USA 
    //       </p>

    //       <p className="footer__contacts_text">
    //         Phone: +1 (718) 555-3757
    //       </p>

    //       <p className="footer__contacts_text">
    //         E-mail: nyc@gmail.com
    //       </p>
    //     </div>
    //   </footer>
    // </div>
