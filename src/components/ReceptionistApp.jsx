import React, { useEffect, useState } from 'react';
import '../devices.css';
import './ReceptionistApp.css';

const ReceptionistApp = () => {
  useEffect(() => {
    // console.log('');
  });
  return (
    <div className="ReceptionistAppContainer">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <div className="device device-surface-book">
          <div style={{ height: '600px', width: '1000px',display:"flex",alignItems:"center",justifyContent:"center" }} className="device-frame">
          <div style={{ height: '550px', width: '950px',display:"flex",alignItems:"center",justifyContent:"center", backgroundColor:"	rgb(32,32,32)" }}>
          <video
                autoPlay
                loop
                muted
                className="banner__video"
                poster="video.jpg"
                style={{  height: '100%' }}
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/first-js-project-c5a77.appspot.com/o/receptionistProductDemo.mp4?alt=media&token=90a46dc5-b0b7-40c3-86b0-214422bb6bfb"
                  type="video/mp4"
                />
              </video>
            {' '}
            </div>
          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>
    </div>
  );
};

export default ReceptionistApp;

