import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ScreenContext } from '../../context/screenContext';
import { AudioWrapper } from './player.style';

function AudioPlayerComponent({id}) {
  const { currSelection } = useContext(ScreenContext);

  return (
    <AudioWrapper id={id}>
      <AudioPlayer
        autoPlay={false}
        src={currSelection?.preview}
      />
    </AudioWrapper>
  )
}

export default AudioPlayerComponent;
