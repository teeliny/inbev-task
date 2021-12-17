import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import SingleCategory from '../../components/play-category/SingleCategory';

function Home() {
  return (
    <HomeWrapper>
      <SideBar />
      <div className='content'>
        <Header />
        <div style={{background: '#fff'}}>
          <SingleCategory />
        </div>
        <p>InBev React Test</p>
      </div>
    </HomeWrapper>
  )
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;

  .content {
    width: calc(100% - 4rem);
  }

  @media(min-width: 601px) {
    .content {
      width: calc(100% - 12rem);
    }
  }
`;
