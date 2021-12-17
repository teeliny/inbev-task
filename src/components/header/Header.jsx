import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
      This header section
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

