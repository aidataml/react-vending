import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ipadImage from './images/Ipad.png';

function Ipad() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='centerContent'>
        <img src={ipadImage} alt="Ipad" className="imageFadeInSpin" style={{ maxWidth: '70%', height: 'auto' }} />
        <div className='backgroundcolor' style={{ textAlign: 'center' }}>
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  );
}

export default Ipad;
