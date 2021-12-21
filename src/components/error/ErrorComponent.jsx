import React from 'react';
import { ErrorWrapper } from './error.style';

function ErrorComponent({ message }) {
  return (
    <ErrorWrapper>
      <div className='error__box'>
        <p className='error__text'>{message}</p>
        <button 
          className='error__button'
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </ErrorWrapper>
  )
}

export default ErrorComponent;
