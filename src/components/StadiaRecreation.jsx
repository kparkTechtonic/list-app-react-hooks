import React, { useEffect, useState } from 'react';
import './about.css';
import '../devices.css';
import './home.css';
import head from '../assets/back.png';

const About = () => {
  useEffect(() => {
    document.querySelector('#root > section > section > section > main').scrollTop = 0;
  }, []);
  // const [className, setClassName] = useState('infscroll');
  const [width, setWidth] = useState('120vw');
  const [vidWidth, setvidWidth] = useState('100%');
  const [marginTop, setMarginTop] = useState('-5rem');
  const [marginLeft, setMarginLeft] = useState('8vw');
  const [height, setHeight] = useState('130vh');
  const [headMarginTop, setHeadMarginTop] = useState('900px');
  const [thoughtClass, setThoughtClass] = useState('notThought');
  const [downArrow, setDownArrow] = useState('downArrow');
  const [opacity, setOpacity] = useState(1);
  const laptopScrollEvent = () => {
    setTimeout(() => {
      // console.log(document.querySelector('#root > section > section > section > main').scrollTop);
      if (document.querySelector('#root > section > section > section > main').scrollTop < 1) {
        setvidWidth('100%');
        setDownArrow('downArrow');
        setMarginLeft('8vw');
      } else if (
        document.querySelector('#root > section > section > section > main').scrollTop <= 1000
        && document.querySelector('#root > section > section > section > main').scrollTop > 1
      ) {
        setvidWidth('100%');
        setOpacity(1);
        setDownArrow('downArrow');
        setThoughtClass('notThought');
        setMarginLeft('8vw');
        setMarginTop(
          `${-5
            + document.querySelector('#root > section > section > section > main').scrollTop
              * 0.01}rem`,
        );
        setHeight(
          `${130
            - document.querySelector('#root > section > section > section > main').scrollTop / 13}vh`,
        );
        setWidth(
          `${(document.getElementsByClassName('infscroll')[0].clientHeight * 1418) / 775 || 0}px`,
        );
        setHeadMarginTop(
          `${900
            - document.querySelector('#root > section > section > section > main').scrollTop     / 1.67}px`,
        );
      } else if (
        document.querySelector('#root > section > section > section > main').scrollTop > 1000
      ) {
        setDownArrow('notThought');
        setOpacity(
          1
            - (document.querySelector('#root > section > section > section > main').scrollTop
              - 1000)     / 600,
        );
        setHeadMarginTop(
          `${300
            - (document.querySelector('#root > section > section > section > main').scrollTop
              - 1000)
              * 1.2}px`,
        );
        setMarginTop(
          `${80
            - (document.querySelector('#root > section > section > section > main').scrollTop
              - 1000)
              * 1.2}px`,
        );
      }
    }, 8);
  };

  useEffect(() => {
    document
      .querySelector('#root > section > section > section > main')
      .addEventListener('scroll', laptopScrollEvent);
    document.querySelector('#root > section > section > section > main').scrollTop = 5;
    return () => {
      document
        .querySelector('#root > section > section > section > main')
        .removeEventListener('scroll', laptopScrollEvent);
    };
  }, []);


  const scrollDown = () => {
    if (document.querySelector('#root > section > section > section > main').scrollTop < 500) {
      document.querySelector('#root > section > section > section > main').scroll({
        top: 870,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      document.querySelector('#root > section > section > section > main').scroll({
        top: 1800,
        left: 0,
        behavior: 'smooth',
      });
    }
    // console.log(document.querySelector('#root > section > section > section > main').scrollTop);
  };

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
      <span className={downArrow} onClick={scrollDown}>
        <p>{/* Scroll */}</p>
      </span>

      <div
        className="device device-macbook-pro device-spacegray"
        style={{
          position: 'absolute',
          width,
          height,
          pointerEvents: 'none',
          zIndex: 0,
          marginTop,
          opacity,
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
                width: '100%',
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
                style={{ width: '100%', height: '100%' }}
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/first-js-project-c5a77.appspot.com/o/720p10sec.mpeg-4.mp4?alt=media&token=8225736b-d6e8-4668-ae6c-7aabddfe3c3e"
                  type="video/mp4"
                />
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
    </div>
  );
};

export default About;

// { /* <img src={require('../assets/html.png')} alt="language icon" style={{ width: '7vw', marginRight: '-1rem' }} />
// <img src={require('../assets/css.png')} alt="language icon" style={{ width: '11vw' }} />
// <img src={require('../assets/es6.svg')} alt="language icon" style={{ width: '5.2vw', marginRight: '3rem' }} />
// <img src={require('../assets/node.png')} alt="language icon" style={{ width: '7vw' }} />
// <img src={require('../assets/mongodb.png')} alt="language icon" style={{ width: '7vw' }} />
// <img src={require('../assets/react.png')} alt="language icon" style={{ width: '7vw' }} />
// <img src={require('../assets/python.jpg')} alt="language icon" style={{ width: '7vw' }} />
// <img src={require('../assets/express.png')} alt="language icon" style={{ width: '10vw' }} />
// <img src={require('../assets/gcp.jpg')} alt="language icon" style={{ width: '10vw' }} />
// <img src={require('../assets/firebase.png')} alt="language icon" style={{ width: '10vw' }} /> */ }

{
  /* <img
                style={{ width: '100%', height: '100%' }}
                src={require('../assets/codeScroll.webp')}
                alt="code"
              /> */
}
