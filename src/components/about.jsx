import React, { useEffect, useState } from 'react';
import './about.css';


const About = () => {
  const name = 'Collin';
  return (
    <div className="aboutContent">
      My name is
      {' '}
      { name }
      <p>
      After an unsatisfying career in academic science, I made the move to web development.
      </p>
      <p>
      This is the product of 10 weeks of learning web development.
      </p>
      <p>
      I think the thing I like best about web development is the problem solving,
      </p>
      I can spend hours on a problem and then wonder where the time has gone
      <p />
    </div>
  );
};

export default About;
