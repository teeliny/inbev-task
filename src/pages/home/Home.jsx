import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';

function Home() {
  return (
    <HomeWrapper>
      <SideBar />
      <div>
        <Header />
        <p>InBev React Test</p>
      </div>
    </HomeWrapper>
  )
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
`;
