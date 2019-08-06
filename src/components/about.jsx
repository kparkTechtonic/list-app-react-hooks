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
    <div>
      <h2>About this page: </h2>
      <h3>How arithmetic logic is being handled?</h3>
      <p>the button input was first verified and then saved into the state as a string, the string was processed using regex split match and replace functions to create an array of numbers and operators in order. </p>
      <p>
      Two recursive functions were called, first to do all the multiplications and divisions, and the second to do all the additions and subtractions. The operations were done in order of arithmatic rule and then from left to right.
      </p>
      <h3>What components were used to create this calculator?</h3>
      <p> the calculator was divided into three components, the parent App.js, and two children Display.js and Buttons.js</p>
      <h3>What do each of the components used do individually?</h3>
      <p>the buttons.js renders all the buttons, dynamically created using map. the display dynamically displays the updated inputs and answers.</p>
      <h3>Now that your finished would you refactor how you have organized your components?  List some pro's and con's of your current component tree.</h3>
      <p>If I were to redo this project, I'd use functional components with hooks instead,  to get used to the syntax.</p>
    </div>
  );
};

export default About;

// return (
//   <div className="mainContent">
//     <img
//       className="infscroll"
//       src={require('../scroll-bgimage.jpg')}
//       alt="image"
//     />
//   </div>
// );
