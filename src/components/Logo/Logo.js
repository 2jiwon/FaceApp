import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brainLogo from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt' options={{ max: 75, scale: 1.3 }} style={{ height: 96, width: 96 }} >
        <div className='Tilt-inner'><img src={brainLogo} /></div>
      </Tilt>
    </div>
  );
}

export default Logo;
