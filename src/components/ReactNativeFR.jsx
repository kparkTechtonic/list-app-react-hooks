import React, { useEffect, useState } from 'react';
import '../devices.css';
import './ReactNativeFR.css';

const ReactNativeFR = () => {
  useEffect(() => {
    // console.log('');
  });
  return (
    <div className="ReactNativeFRContainer">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <div className="device device-iphone-x">
          <div style={{ maxHeight: '700px', maxWidth: '360px' }} className="device-frame">
            <img
              style={{ borderRadius: '2rem', width: '100%', height: '100%' }}
              src={require('../assets/expo.webp')}
              alt="demo"
            />
            {' '}
          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>
      <div>
        <p style={{ maxWidth: '300px' }}>
          Use the Expo app QR reader to try this app on your mobile phone.
        </p>
        <img
          style={{ width: '300px', height: '300px' }}
          src={require('../assets/qrcode.png')}
          alt="qrcode"
        />
      </div>
    </div>
  );
};

export default ReactNativeFR;
