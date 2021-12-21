import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


function LoadingComponent() {
  return (
    <LoadWrapper>
      <FontAwesomeIcon className='spin' icon={faSpinner} spin />
    </LoadWrapper>
  );
}

export default LoadingComponent;

const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .spin {
    font-size: 2.5rem;
  }
`;