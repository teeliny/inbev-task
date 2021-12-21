import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;

  .content {
    width: calc(100% - 4rem);
  }

  .group__container {
    background: '#fff';
    border-bottom-right-radius: '0.375rem';
  }

  @media(min-width: 601px) {
    .content {
      width: calc(100% - 12rem);
    }
  }
`;
