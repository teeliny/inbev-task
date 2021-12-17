import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  return (
    <ArrowWrapper>
      <FontAwesomeIcon className='menu__logo' icon={faChevronLeft} />
      <FontAwesomeIcon className='menu__logo' icon={faChevronRight} />
    </ArrowWrapper>
  )
}

export default Pagination;

const ArrowWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: #6760dc;
  font-size: 1.5rem;
`;