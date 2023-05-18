import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const ResizablePlayer = ({ url, resizePercentage }) => {
    const [playerWidth, setPlayerWidth] = useState(window.innerWidth * resizePercentage);
    const [playerHeight, setPlayerHeight] = useState((9 / 16) * playerWidth);
  

  const handleResize = () => {
    // Perform any logic to calculate the new dimensions based on your requirements
    const newWidth = window.innerWidth * resizePercentage;
    const newHeight = (9 / 16) * newWidth;

    setPlayerWidth(newWidth);
    setPlayerHeight(newHeight);
  };

  // Attach the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resizePercentage]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: playerWidth, height: playerHeight, marginTop: '1rem' }}>
      <ReactPlayer url={url} width={playerWidth} height={playerHeight} playing={true} muted loop={true}/>
    </div>
    </div>
  );
};

export default ResizablePlayer;