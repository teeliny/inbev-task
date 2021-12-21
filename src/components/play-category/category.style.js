import styled from 'styled-components';

export const SingleWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;

  .category__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .category__text {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: #cecedc;
  }

  .category__line {
    width: 10%;
    transform: translateY(-50%);
    border: 1px solid #eeeeee;
  }

  .category__content {
    display: flex;
    justify-content: flex-start;
    padding: 0 1.5rem;
    gap: 2rem;
  }

  .main__content {
    width: ${props => `calc(100% / ${props.pageSize})`};
    cursor: pointer;
    position: relative;
  }

  .content__img {
    width: 100%;
  }

  .content__text {
    text-align: center;
  }

  .track__error {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 1);
    padding: 1rem 0;
  }

  @media(min-width: 601px) {
    .category__line {
      width: 60%;
    }
  }
`;