import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: 'flex';
  height: 100vh;
  position: relative;

  .error__box {
    background-color: rgba(255, 0, 0, 0.2);
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
  }

  .error__text {
    word-wrap: 'break-word';
    width: '100%';
    text-align: center;
  }

  .error__button {
    margin-top: '1rem';
    border: 1px solid #ff0000;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    color: #ff0000;
  }
`;

