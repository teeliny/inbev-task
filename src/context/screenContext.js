import React, { createContext, useState, useLayoutEffect, useEffect } from 'react';
import Axios from 'axios';

const ScreenContext = createContext();
const { Provider } = ScreenContext;

// Function to monitor window width
export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [layout, setLayout] = useState(1);

  useLayoutEffect(() => {
    function updateWidth() {
      const currWidth = window.innerWidth;
      setWidth(window.innerWidth);
      if (currWidth <= 375) setLayout(1)
      if (375 < currWidth && currWidth <= 768) setLayout(2)
      if (768 < currWidth && currWidth <= 1024) setLayout(3)
      if (1024 < currWidth && currWidth <= 1536) setLayout(4)
      if (1536 < currWidth && currWidth <= 2048) setLayout(5)
      if (currWidth > 2048) setLayout(6)
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, [])
  return {width, layout};
}

const ScreenProvider = ({ children }) => { 
  const { width, layout } = useWindowSize();
  const [currSelection, setCurrSelection] = useState(null);
  const [fetchData, setFetchData] = useState({
    new_releases: [],
    featured_playlists: [],
    categories: [],
  });
  // Make API call and set data to state
  useEffect(() => {
    const releasesPromise = Axios.get(`https://api.deezer.com/chart/new-releases`);
    const featuredPromise = Axios.get(`https://api.deezer.com/chart/featured-playlists`);
    const categoryPromise = Axios.get(`https://api.deezer.com/chart/categories`);
    
    Promise.all([releasesPromise, featuredPromise, categoryPromise])
      .then(data => {
        const resData = data.map(value => (
          value.data.tracks.data.map(item => (
            {
              id: item.id,
              title: item.title,
              preview: item.preview,
              img: item.album.cover,
              small_img: item.album.cover_small,
            }
          ))
        ))
        // Set to state
        setFetchData({
          new_releases: resData[0],
          featured_playlists: resData[1],
          categories: resData[2],
        });
        const { id, title, preview, img, small_img } = resData[0][0];
        setCurrSelection({
          id,
          title,
          preview,
          img,
          small_img,
        })
      });
  }, []);

  // Function that handles click on any of the tracks
  const handleClickTrack = (inputId) => {
    const combinedTracks = [...fetchData.new_releases, ...fetchData.featured_playlists, ...fetchData.categories];
    const filteredTrack = combinedTracks.find(item => item.id === inputId);
    setCurrSelection({
      id: filteredTrack.id,
      title: filteredTrack.title,
      preview: filteredTrack.preview,
      img: filteredTrack.img,
      small_img: filteredTrack.small_img,
    })
  }
  // console.log(currSelection)
  return (
    <Provider
      value={{
        width,
        layout,
        fetchData,
        currSelection,
        handleClickTrack,
      }}
    >
      {children}
    </Provider>
  );
}

export { ScreenContext, ScreenProvider };