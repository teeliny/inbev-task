import React, { createContext, useState, useLayoutEffect } from 'react';
import Axios from 'axios';

// Function to monitor window width
export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [layout, setLayout] = useState(1);

  const basePath = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';


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

const ScreenContext = createContext();
const { Provider } = ScreenContext;

const ScreenProvider = ({ children }) => { 
  const { width, layout } = useWindowSize();

  return (
    <Provider
      value={{
        width,
        layout
      }}
    >
      {children}
    </Provider>
  );
}

export { ScreenContext, ScreenProvider };