import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #ffb5a7;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow: hidden;
  border-top-right-radius: 0.375rem;

  .hero__left {
    display: none;
  }

  .hero__right {
    margin: 0 2rem;
    text-align: left;
  }

  .hero__tune {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  .hero__all {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }

  .hero__star {
    color: #ffd712;
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }

  .moon {
    height: 1rem;
    width: 1rem;
    margin-left: 1rem;
    background-color: transparent;
    box-shadow: -4px 2px 0 1px #000000;
    border-radius: 50%;
  }

  @media(min-width: 376px) {
    .hero__tune {
      font-size: 2rem;
    }

    .hero__all {
      font-size: 1.5rem;
    }

    .hero__star {
      font-size: 2rem;
    }

    .moon {
      height: 1.5rem;
      width: 1.5rem;
      margin-left: 1rem;
      box-shadow: -5px 3px 0 3px #000000;
    }
  }

  @media(min-width: 601px) {
    .hero__left {
      display: block;
    }
    .hero__img {
      position: absolute;
      top: -3rem;
      left: -1.8rem;
      -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
      transform: scaleX(-1);
      height: 150%;
    }

    .hero__right {
      text-align: right;
    }
  }


`;
