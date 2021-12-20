import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ScreenContext } from '../../context/screenContext';
import styled from 'styled-components';

function AudioPlayerComponent() {
  const { currSelection } = useContext(ScreenContext);

  return (
    <AudioWrapper>
      <AudioPlayer
        autoPlay={false}
        src={currSelection?.preview}
      />
    </AudioWrapper>
  )
}

export default AudioPlayerComponent;

const AudioWrapper = styled.div`
  position: fixed; 
  bottom: 0;
  width: calc(100% - 2rem);
`;