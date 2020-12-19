import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const TrackPlayer = ({id}) => {

    return(
        <AudioPlayer src={`http://localhost:3001/track/${id}`} />
    )
}

export default TrackPlayer;