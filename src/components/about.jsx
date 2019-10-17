import React, { useEffect } from 'react';
import './about.css';

import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;


const About = () => {
  useEffect(() => {
    document.querySelector('#root > section > section > section > main').scrollTop = 0;
  }, []);
  return (

    <Typography>
      <Title>About me</Title>

      <Paragraph className="paragraph">
      After launching an unsatisfying career in academic science [
        <a href="https://pubs.acs.org/doi/10.1021/acs.jpcc.8b10797" target="_blank" rel="noopener noreferrer">link to paper</a>
      ], I made the move towards programming.


      </Paragraph>
      <Paragraph className="paragraph">
I had started to discover data science and machine learning, using
        {' '}
        <Text code>Python</Text>
        {' '}
and
        {' '}
        <Text code>R</Text>
        {' '}
with libraries like
        {' '}
        <Text code>numpy</Text>
,
        {' '}
        <Text code>SciKit Learn</Text>
        ,
        {' '}
        <Text code>Pandas</Text>
        {' '}
,
        {' '}
        <Text code>Tensorflow</Text>
        {' '}
,
        {' '}
        <Text code>Keras</Text>
        {' '}
and
        {' '}
        <Text code>MatPlotLib</Text>
      </Paragraph>
      <Paragraph className="paragraph">
      But in early 2019, I was very fortunate to be selected to be paid to study web development as an apprentice.
        {' '}
        <br />
Since then, I've had the opportunity to learn
        {' '}
        <Text code>HTML</Text>
,
        {' '}
        <Text code>CSS</Text>
        {' '}
and
        {' '}
        <Text code>JS</Text>
 in great detail.
        {' '}
        <br />
I've explored both
        {' '}
        <Text code>Object Oriented Programming</Text>
        {' '}
and
        {' '}
        <Text code>Functional programming</Text>
.

        <br />
I've had a chance to use libraries and frameworks in
        {' '}
        <Text code>React</Text>
,
        {' '}
        <Text code>Redux</Text>
,
        {' '}
        <Text code>Ant design</Text>
        and more.
        {' '}
        <br />
Backend technologies were also explored, with
        {' '}
        <Text code>Node JS</Text>
        {' '}
as the language,
        {' '}
        <Text code>MongoDB</Text>
        and
        <Text code>Firestore</Text>
        {' '}
as the database and with frameworks and offerings like
        {' '}
        <Text code>Express</Text>
,
        <Text code>Mongoose</Text>
and
        <Text code>Google Serverless Functions</Text>

.
      </Paragraph>
      <Paragraph />

      <Paragraph className="paragraph">
      This website was made
        {' '}
        <Text strong>10 weeks</Text>
        {' '}
into the apprenticeship program.
        {' '}
        <br />
My biggest strength is probably my ability to learn and fully grasp information very quickly,
        {' '}
        <Text strong>and develop a passion in it too.</Text>
      </Paragraph>
      <Paragraph className="paragraph">
This website was made using
        {' '}
        <Text code>React Hooks</Text>
        {' '}
with only
        {' '}
        <Text code>Functional Components</Text>
        {' '}
with the exception of
        {' '}
        <Text code>Class Components</Text>
        {' '}
for the
        {' '}
        <Text code> Higher Order Components</Text>
        {' '}
to be consumed with the
        {' '}
        <Text code>context hook</Text>
        {' '}
        <Text code>API</Text>
.
        <br />
The animation on the landing page was made with
        {' '}
        <Text code>vanilla js</Text>
      </Paragraph>
      <Title level={2}>How to find me</Title>
      <Paragraph className="paragraph">
      I'm loving life in the Broomfield area of Colorado.
      </Paragraph>

      <Paragraph className="paragraph">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/c-p/">Linkedin</a>
          </li>
          <li>
            <p>Phone - (424) 274 - 1770</p>
          </li>
        </ul>
      </Paragraph>

      <Divider />
    </Typography>
  );
};

export default About;
