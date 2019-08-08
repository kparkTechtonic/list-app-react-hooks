import React, { useEffect, useState } from 'react';
import './about.css';
import '../devices.css';


const About = () => {
  // const [className, setClassName] = useState('infscroll');
  const [width, setWidth] = useState(2400);
  const [marginTop, setMarginTop] = useState('-5rem');
  const [height, setHeight] = useState('110vh');
  const [backgroundX, setBackgroundX] = useState(0);
  useEffect(() => {
    document.querySelector('#root > section > section > section > main').addEventListener('scroll', () => {
      setTimeout(() => {
        console.log(document.querySelector('#root > section > section > section > main').scrollTop);
        if (document.querySelector('#root > section > section > section > main').scrollTop <= 500) {
          setHeight('110vh');
          setWidth(`${2400}px`);
          setBackgroundX(-document.querySelector('#root > section > section > section > main').scrollTop / 2);
        } else if (document.querySelector('#root > section > section > section > main').scrollTop > 500
        && document.querySelector('#root > section > section > section > main').scrollTop < 1600) {
          setMarginTop(`${-3 + document.querySelector('#root > section > section > section > main').scrollTop / 250}rem`);
          setHeight(`${1060 / document.querySelector('#root > section > section > section > main').scrollTop * 85}vh`);
          setWidth(`${document.getElementsByClassName('infscroll')[0].clientHeight * 1418 / 775}px`);
        } else if (document.querySelector('#root > section > section > section > main').scrollTop > 1600) {
          console.log('here');
          setMarginTop(`${3.388 - (document.querySelector('#root > section > section > section > main').scrollTop - 1600) / 10}rem`);
        }
        console.log(marginTop);
      }, 16);
    });
  }, []);

  // useEffect(() => {
  //   console.log(marginTop);
  // });

  return (

    <div
      className="mainContent"
      style={{
        overflow: 'hidden',
        height: '3200px',
      }}
    >
      <div
        className="device device-macbook-pro device-spacegray"
        style={{
          position: 'fixed',
          width,
          height,
          pointerEvents: 'none',
          zIndex: 0,
          marginTop,
          marginRight: '-15rem',
        }}
      >
        <div
          className="device-frame"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              display: 'block',
            }}
          >
            <div
              className="infscroll"
              style={{
                backgroundSize: 'cover',
                position: 'sticky',
                top: 0,
                backgroundPositionX: backgroundX,
                height,
                zIndex: 1,
              }}
            >
              <video
                autoPlay
                loop
                muted
                className="banner__video"
                poster="video.jpg"
                style={{
                  size: '100%',
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                <source src="https://storage.googleapis.com/mannequin/blobs/b2f6ec83995556095867d0b055d87230.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
        <div style={{ width: '100%', position: 'relative', zIndex: 4 }}>
          <div className="device-stripe" style={{ width: '100%' }} />
          <div className="device-header" style={{ width: '100%' }} />
          <div className="device-sensors" style={{ width: '100%' }} />
          <div className="device-btns" style={{ width: '100%' }} />
          <div className="device-power" style={{ width: '100%' }} />
        </div>
      </div>
      <div
        id="underneath"
        style={{
          marginTop: '2200px',
          width: '100%',
          height: '100%',
          zIndex: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '8rem', zIndex: 12 }}>Collin Park</h1>
        <p>Hungry to learn, ready to join a team, </p>
        <p>One team, one dream </p>

        <p>Experience using: </p>
        <span style={{
          display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center',
        }}
        >
          <img src={require('../assets/html.png')} style={{ width: '9rem', marginRight: '-1rem' }} />
          <img src={require('../assets/css.png')} style={{ width: '14rem' }} />
          <img src={require('../assets/es6.svg')} style={{ width: '6.5rem', marginRight: '3rem' }} />
          <img src={require('../assets/node.png')} style={{ width: '10rem' }} />
          <img src={require('../assets/mongodb.png')} style={{ width: '10rem' }} />
          <img src={require('../assets/react.png')} style={{ width: '10rem' }} />
          <img src={require('../assets/python.jpg')} style={{ width: '10rem' }} />
        </span>
      </div>
    </div>
  );
};

export default About;


// return (
//   <div className="mainContent">
//     <div className="device device-macbook-pro device-spacegray">
//       <div className="device-frame">
//         <div
//           className={className}
//           style={{ backgroundPositionX: backgroundX }}
//         />
//       </div>
//       <div className="device-stripe" />
//       <div className="device-header" />
//       <div className="device-sensors" />
//       <div className="device-btns" />
//       <div className="device-power" />
//     </div>
//     <div style={{
//       position: 'sticky', top: '0', width, height,
//     }}
//     >
//       <div
//         className={className}
//         style={{ backgroundPositionX: backgroundX }}
//       />
//     </div>
//     <div id="underneath">
//       <h1 style={{ fontSize: '8rem' }}>Collin Park</h1>
//       <p>Experience using</p>
//       <span>
//         <img src={require('../assets/html.png')} style={{ width: '9rem', marginRight: '-1rem' }} />
//         <img src={require('../assets/css.png')} style={{ width: '14rem' }} />
//         <img src={require('../assets/es6.svg')} style={{ width: '6.5rem', marginRight: '3rem' }} />
//         <img src={require('../assets/node.png')} style={{ width: '10rem' }} />
//         <img src={require('../assets/mongodb.png')} style={{ width: '10rem' }} />
//         <img src={require('../assets/react.png')} style={{ width: '10rem' }} />
//         <img src={require('../assets/python.jpg')} style={{ width: '10rem' }} />
//       </span>
//     </div>
//   </div>
// );
