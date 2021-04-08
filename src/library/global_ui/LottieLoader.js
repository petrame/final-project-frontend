import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from './lottie_config/LottieLoader.json';

export const LottieLoader = () => {

    return (
      <div>
        <Lottie 
          loop
          play
          animationData={animationData}
          style={{ width: '100vw', maxHeight: 400}}
        />
      </div>
    );
  }
