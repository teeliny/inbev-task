import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoadWrapper } from './loading.style';


function LoadingComponent() {
  return (
    <LoadWrapper>
      <FontAwesomeIcon className='spin' icon={faSpinner} spin />
    </LoadWrapper>
  );
}

export default LoadingComponent;
