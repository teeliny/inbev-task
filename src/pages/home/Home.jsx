import React, { useContext } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';
import SingleCategory from '../../components/play-category/SingleCategory';
import { ScreenContext } from '../../context/screenContext';
import AudioPlayerComponent from '../../components/player/AudioPlayer';
import { HomeWrapper } from './home.style';

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
              id={'discover'}
              data={fetchData.new_releases}
              category={'released this week'}
            />
            <SingleCategory
              id={'search'}
              data={fetchData.featured_playlists}
              category={'featured playlists'}
            />
            <SingleCategory
              id={'charts'}
              data={fetchData.categories}
              category={'categories'}
            />
          </div>
        </div>
        <AudioPlayerComponent id={'playlists'} />
      </HomeWrapper>)}
    </>
  )
}

export default Home;
