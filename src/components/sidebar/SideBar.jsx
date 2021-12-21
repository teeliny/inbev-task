import React from 'react';
import { MenuWrapper } from './sidebar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeadphonesAlt, faSearch, faHeart, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <MenuWrapper>
      <div className="avatar">
        <img
          className="avatar__img"
          src={`${process.env.PUBLIC_URL}/assets/img/avatar.svg`}
          alt='avatar'
        />
        <p className="avatar__text">Smith Rowe</p>
      </div>
      <div className='menu__content'>
        {/* Single Menu */}
        <a href="#discover" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faHeadphonesAlt} />
          <p className='menu__text'>Discover</p>
        </a>
        {/* Single Menu */}
        <a href="#search" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faSearch} />
          <p className='menu__text'>Search</p>
        </a>
        {/* Single Menu */}
        <a href="#discover" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faHeart} />
          <p className='menu__text'>Favourites</p>
        </a>
        {/* Single Menu */}
        <a href="#playlists" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faPlayCircle} />
          <p className='menu__text'>Playlists</p>
        </a>
        {/* Single Menu */}
        <a href="#charts" className='single__menu'>
            <FontAwesomeIcon className='menu__logo' icon={faBars} />
            <p className='menu__text'>Charts</p>
        </a>
      </div>
    </MenuWrapper>
  )
}

export default SideBar;
