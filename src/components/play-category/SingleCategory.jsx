import React from 'react';
import styled from 'styled-components';
import Pagination from '../../common/pagination/Pagination';

function SingleCategory() {
  return (
    <SingleWrapper>
      <div className='category__header'>
        <p className='category__text'>released this week</p>
        <hr className='category__line' />
        <Pagination />
      </div>
      <div>
        content
      </div>
      
    </SingleWrapper>
  )
}

export default SingleCategory;

const SingleWrapper = styled.div`
  width: 100%;

  .category__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
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

  @media(min-width: 601px) {
    .category__line {
      width: 60%;
    }
  }
`;

