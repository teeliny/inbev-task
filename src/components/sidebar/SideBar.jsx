import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
        <div id="#discover" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faCoffee} />
          <p className='menu__text'>Discover</p>
        </div>
        {/* Single Menu */}
        <div id="#search" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faCoffee} />
          <p className='menu__text'>Search</p>
        </div>
        {/* Single Menu */}
        <div id="#favourites" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faCoffee} />
          <p className='menu__text'>Favourites</p>
        </div>
        {/* Single Menu */}
        <div id="#playlists" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faCoffee} />
          <p className='menu__text'>Playlists</p>
        </div>
        {/* Single Menu */}
        <div id="#charts" className='single__menu'>
          <FontAwesomeIcon className='menu__logo' icon={faCoffee} />
          <p className='menu__text'>Charts</p>
        </div>
      </div>
    </MenuWrapper>
  )
}

export default SideBar;

const MenuWrapper = styled.div`
  width: 4rem;
  background-color: #6760dc;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto 3rem;
  }

  .avatar__img {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
  }

  .avatar__text {
    display: none;
  }

  .menu__content {
    width: 100%;
  }

  .single__menu {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 1rem 0.5rem;
    color: #e4e4e4;
    opacity: 0.7;
  }

  .menu__logo {
    font-size: 2rem;
  }

  .single__menu:hover {
    background-color: rgba(240, 240, 240, 0.5);
    color: #ffffff;
    opacity: 1;
  }

  .menu__text {
    display: none;
  }

  @media(min-width: 601px) {
    width: 12rem;

    .avatar {
      margin: 3rem auto 5rem;
    }
    
    .avatar__img {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.5rem;
    }

    .avatar__text {
      display: block;
    }

    .single__menu {
      padding: 1rem 2rem;;
    }
    .menu__logo {
      font-size: 1rem;
    }
    .menu__text {
      display: block;
    }
  }
`;

