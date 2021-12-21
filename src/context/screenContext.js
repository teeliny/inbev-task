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
      if (375 < currWidth && currWidth <= 768) setLayout(3)
      if (768 < currWidth && currWidth <= 1024) setLayout(6)
      if (1024 < currWidth && currWidth <= 1536) setLayout(8)
      if (1536 < currWidth && currWidth <= 2048) setLayout(10)
      if (currWidth > 2048) setLayout(12)
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, [])
  return {width, layout};
}

const ScreenProvider = ({ children }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { width, layout } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currSelection, setCurrSelection] = useState(null);
  const [fetchData, setFetchData] = useState({
    new_releases: [],
    featured_playlists: [],
    categories: [],
  });
  // Make API call and set data to state
  useEffect(() => {
    setLoading(true);
    const releasesPromise = Axios.get(`${baseURL}/api/chart/new-releases`);
    const featuredPromise = Axios.get(`${baseURL}/api/chart/featured-playlists`);
    const categoryPromise = Axios.get(`${baseURL}/api/chart/categories`);
    
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
        });
        setLoading(false);
      })
      .catch(_err => {
        setLoading(false);
        setError(true);
      });
  }, [baseURL]);

  // Function that handles click on any of the tracks
  const handleClickTrack = (inputId) => {
    const combinedTracks = [...fetchData.new_releases, ...fetchData.featured_playlists, ...fetchData.categories];
    const filteredTrack = combinedTracks.find(item => item.id === inputId);
    const { id, title, preview, img, small_img } = filteredTrack;
    if (preview.length > 0) {
      setCurrSelection({
        id,
        title,
        preview,
        img,
        small_img,
      });
    }
  }

  return (
    <Provider
      value={{
        width,
        layout,
        loading,
        error,
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