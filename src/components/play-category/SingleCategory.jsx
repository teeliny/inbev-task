import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '../../common/pagination/Pagination';
import { ScreenContext } from '../../context/screenContext';

function SingleCategory({data, category}) {
  const { layout: pageSize } = useContext(ScreenContext);
  const [displayData, setDisplayData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  // Extract the data to display based on page index
  useEffect(() => {
    const sectionData = data.slice(pageSize * (pageIndex - 1), pageSize * pageIndex);
    setDisplayData(sectionData);
  }, [pageIndex, pageSize, data]);

  return (
    <SingleWrapper pageSize={pageSize}>
      <div className='category__header'>
        <p className='category__text'>{category}</p>
        <hr className='category__line' />
        <Pagination
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          chunks={Math.ceil(data.length / pageSize)}
        />
      </div>
      <div className='category__content'>
        {/* Single content */}
        {displayData.map(singleTrack => (
          <div 
            key={singleTrack.id} 
            id={singleTrack.id} 
            className='main__content'
          >
            <img 
              className='content__img' 
              src={singleTrack.img} 
              alt={singleTrack.title} 
            />
            <p className='content__text'>{singleTrack.title}</p>
          </div>
        ))}
        
      </div>
      
    </SingleWrapper>
  )
}

export default SingleCategory;

const SingleWrapper = styled.div`
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
  }

  .content__img {
    width: 100%;
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
