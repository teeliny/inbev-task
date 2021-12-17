import React from 'react';
import styled from 'styled-components';
import Pagination from '../../common/pagination/Pagination';
import featured from '../../mockData/featured-playlist.json';

function SingleCategory() {
  const tracks = featured.tracks.data;
  const arr = tracks.map(item => (
    {
      id: item.id,
      title: item.title,
      preview: item.preview,
      img: item.album.cover,
      small_img: item.album.cover_small,
    }
  ));
  console.log(arr)
  return (
    <SingleWrapper>
      <div className='category__header'>
        <p className='category__text'>released this week</p>
        <hr className='category__line' />
        <Pagination />
      </div>
      <div className='category__content'>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
        {/* Single content */}
        <div className='main__content'>
          <img className='content__img' src={arr[0].img} alt={arr[0].title} />
          <p className='content__text'>{arr[0].title}</p>
        </div>
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

  .category__content {
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    gap: 0.5rem;
  }

  .main__content {
    /* width: 70%; */
    margin: 0 auto;
  }

  .content__img {
    width: 200px;
  }

  .content__text {
    text-align: center;
  }

  @media(min-width: 601px) {
    .category__line {
      width: 60%;
    }
  }
`;

