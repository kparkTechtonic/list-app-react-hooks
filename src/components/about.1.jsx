import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
  const [className, setClassName] = useState('infscroll');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        if (window.scrollY > 183) {
          // window.scrollTo((window.scrollY - 183), window.scrollY);
          console.log('sticky req hit');
        }
        if (window.scrollY > 600) {
          console.log('second condition hit');
        }
        console.log(`y-coord:${window.scrollY}  x-coord${window.scrollX}`);
      }, 16);
    });
  }, []);
  function abc() {
    return 'a';
  }
  return (
    <div className="mainContent">
      <img
        className="infscroll"
        src={require('../scroll-bgimage.jpg')}
        alt="image"
      />
    </div>
  );
};

export default About;
