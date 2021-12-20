import React, { useContext } from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import SingleCategory from '../../components/play-category/SingleCategory';
import { ScreenContext } from '../../context/screenContext';
import AudioPlayerComponent from '../../components/player/AudioPlayer';
function Home() {
  const { fetchData } = useContext(ScreenContext);

  return (
    <HomeWrapper>
      <SideBar />
      <div className='content'>
        <Header />
        <div style={{background: '#fff', borderBottomRightRadius: '0.375rem'}}>
          <SingleCategory
            data={fetchData.new_releases}
            category={'released this week'}
          />
          <SingleCategory
            data={fetchData.featured_playlists}
            category={'featured playlists'}
          />
          <SingleCategory
            data={fetchData.categories}
            category={'categories'}
          />
        </div>
      </div>
      <AudioPlayerComponent />
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
