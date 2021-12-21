import React, { useContext } from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';
import SingleCategory from '../../components/play-category/SingleCategory';
import { ScreenContext } from '../../context/screenContext';
import AudioPlayerComponent from '../../components/player/AudioPlayer';

function Home() {
  const { fetchData, loading, error } = useContext(ScreenContext);
  
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) :
      error ? (
        <ErrorComponent message={'Error fetching the data. Check your network and try again'} />
      ) : (
      <HomeWrapper>
        <SideBar />
        <div className='content'>
          <Header />
          <div className='group__container'>
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
      </HomeWrapper>)}
    </>
  )
}

export default Home;

const HomeWrapper = styled.div`
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
