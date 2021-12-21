import React, { useContext, useState, useEffect } from 'react';
import { SingleWrapper } from './category.style';
import Pagination from '../../common/pagination/Pagination';
import { ScreenContext } from '../../context/screenContext';

function SingleCategory({data, category}) {
  const { layout: pageSize, handleClickTrack } = useContext(ScreenContext);
  const [displayData, setDisplayData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [isHover, setIsHover] = useState(false);

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
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => handleClickTrack(singleTrack.id)}
            className='main__content'
          >
            <img 
              className='content__img' 
              src={singleTrack.img ? singleTrack.img : singleTrack.small_img} 
              alt={singleTrack.title} 
            />
            <p className='content__text'>{singleTrack.title}</p>
            {isHover && singleTrack.preview.length === 0 &&
              <p className='track__error'>Audio file not provided</p>
            }
          </div>
        ))}
      </div>
      
    </SingleWrapper>
  )
}

export default SingleCategory;


