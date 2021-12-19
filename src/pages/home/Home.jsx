import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import SingleCategory from '../../components/play-category/SingleCategory';
import featured from '../../mockData/featured-playlist.json';

const tracks = featured.tracks.data;
  const arr = tracks.map(item => (
    {
      id: item.id,
      title: item.title,
      preview: item.preview,
      img: item.album.cover,
      small_img: item.album.cover_small,
    }
  ));

function Home() {
  return (
    <HomeWrapper>
      <SideBar />
      <div className='content'>
        <Header />
        <div style={{background: '#fff'}}>
          <SingleCategory data={arr} category={'released this week'} />
          <SingleCategory data={arr} category={'featured playlists'} />
          <SingleCategory data={arr} category={'categories'} />
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
