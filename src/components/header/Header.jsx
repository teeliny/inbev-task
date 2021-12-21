import React from 'react';
import { HeaderWrapper } from './header.style';

function Header() {
  return (
    <HeaderWrapper>
      <div className='hero__left'>
        <img
          className="hero__img"
          src={`${process.env.PUBLIC_URL}/assets/img/hero.svg`}
          alt='hero'
        />
      </div>
      <div className='hero__right'>
        <p className='hero__tune'>Your favourite tunes</p>
        <div className='hero__all'>
          <p>
            All <span className='hero__star'>&#10027;</span> and all
          </p>
          <span> </span>
          <div className='moon'></div>
        </div>
        
      </div>
    </HeaderWrapper>
  )
}

export default Header;
