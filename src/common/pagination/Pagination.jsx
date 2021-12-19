import React from 'react';
import styled from 'styled-components';
// import { ScreenContext } from '../../context/screenContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Pagination({pageIndex, setPageIndex, chunks}) {
  // const { layout: pageSize, width } = useContext(ScreenContext);

  const handleForwardArrow = () => {
    if (pageIndex < Math.floor(chunks)) {
      setPageIndex(pageIndex + 1);
    }
  }
  const handleBackwardArrow = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  }
  return (
    <ArrowWrapper>
      <FontAwesomeIcon
        onClick={handleBackwardArrow}
        className={`menu__logo ${pageIndex === 1 && 'menu__faint'}`}
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={handleForwardArrow}
        className={`menu__logo ${pageIndex === chunks && 'menu__faint'}`}
        icon={faChevronRight}
      />
    </ArrowWrapper>
  )
}

export default Pagination;

const ArrowWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: #6760dc;
  font-size: 1.5rem;

  .menu__faint {
    opacity: 0.25;
  }
`;