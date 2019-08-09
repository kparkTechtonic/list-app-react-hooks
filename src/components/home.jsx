import React, { useEffect, useState } from 'react';
import './about.css';
import '../devices.css';
import './home.css';
import video from '../assets/landingMov.mp4';
import head from '../assets/back.png';

const About = () => {
  // const [className, setClassName] = useState('infscroll');
  const [width, setWidth] = useState('2400px');
  const [marginTop, setMarginTop] = useState('-9rem');
  const [marginLeft, setMarginLeft] = useState('3rem');
  const [height, setHeight] = useState('110vh');
  const [headMarginTop, setHeadMarginTop] = useState('900px');
  const [thoughtClass, setThoughtClass] = useState('notThought');
  const laptopScrollEvent = () => {
    setTimeout(() => {
      if (document.querySelector('#root > section > section > section > main').scrollTop <= 1000) {
        setThoughtClass('notThought');
        setMarginLeft('3rem');
        setMarginTop(`${-5 + document.querySelector('#root > section > section > section > main').scrollTop / 100}rem`);
        setHeight(`${110 - (document.querySelector('#root > section > section > section > main').scrollTop) / 20}vh`);
        setWidth(`${document.getElementsByClassName('infscroll')[0].clientHeight * 1418 / 775 || 0}px`);
        setHeadMarginTop(`${900 - (document.querySelector('#root > section > section > section > main').scrollTop) / 1.67}px`);
      } else if (document.querySelector('#root > section > section > section > main').scrollTop > 1000) {
        setThoughtClass('thought');
        setHeadMarginTop(`${300 - (document.querySelector('#root > section > section > section > main').scrollTop - 1000) * 1.2}px`);
        setMarginTop(`${80 - (document.querySelector('#root > section > section > section > main').scrollTop - 1000) * 1.2}px`);
      }
    }, 8);
  };

  useEffect(() => {
    document.querySelector('#root > section > section > section > main').addEventListener('scroll', laptopScrollEvent);
    return () => {
      document.querySelector('#root > section > section > section > main').removeEventListener('scroll', laptopScrollEvent);
    };
  }, []);

  // useEffect(() => {
  //   console.log(marginTop);
  // });

  return (

    <div
      className="mainContent"
      style={{
        scroll: 'smooth',
        marginLeft,
        overflow: 'hidden',
        height: '2600px',
      }}
    >
      <div
        className="device device-macbook-pro device-spacegray"
        style={{
          position: 'absolute',
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
                  width: '100%',
                  height: '110%',
                }}
              >
                <source src={video} type="video/mp4" />

                This video is not supported
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
      <p
        className={thoughtClass}
        style={{
          marginTop: headMarginTop,
          pointerEvents: 'none',
          position: 'absolute',
          marginLeft: '280px',
          zIndex: 13,
          fontWeight: 'bold',
          fontsize: 'large',
        }}
      >
        I cant believe it!
        <br />
        {' '}
        I'm actually coding!
      </p>
      <img
        src={head}
        alt="head"
        style={{
          marginTop: headMarginTop,
          pointerEvents: 'none',
          borderBottom: '30px solid black',
          position: 'absolute',
          zIndex: 12,
        }}
      />
      <div
        id="underneath"
        style={{
          marginTop: '1600px',
          width: '100%',
          height: '100%',
          zIndex: 13,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '8rem', zIndex: 12 }}>Collin Park</h1>
        <p>Hungry to learn, ready to contribute, ready to join a team, </p>

        <p>Experience using: </p>
        <span style={{
          display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center',
        }}
        >
          <img src={require('../assets/html.png')} style={{ width: '7vw', marginRight: '-1rem' }} />
          <img src={require('../assets/css.png')} style={{ width: '11vw' }} />
          <img src={require('../assets/es6.svg')} style={{ width: '5.2vw', marginRight: '3rem' }} />
          <img src={require('../assets/node.png')} style={{ width: '7vw' }} />
          <img src={require('../assets/mongodb.png')} style={{ width: '7vw' }} />
          <img src={require('../assets/react.png')} style={{ width: '7vw' }} />
          <img src={require('../assets/python.jpg')} style={{ width: '7vw' }} />
          <img src={require('../assets/express.png')} style={{ width: '10vw' }} />
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


//                <source src="https://storage.googleapis.com/mannequin/blobs/b2f6ec83995556095867d0b055d87230.mp4" type="video/mp4" />

// <video
//   autoPlay
//   loop
//   muted
//   className="banner__video"
//   poster="video.jpg"
//   style={{
//     size: '100%',
//     width: '100%',
//     height: '110%',
//   }}
// >
//   <source src={imgGif} type="video/mp4" />

//   This video is not supported
// </video>
