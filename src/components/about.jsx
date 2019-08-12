import React from 'react';
import './about.css';

import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;


const About = () => (

  <Typography>
    <Title>About me</Title>

    <Paragraph className="paragraph">
      After launching an unsatisfying career in academic science, I made the move to web development.

    </Paragraph>
    <Paragraph className="paragraph">
Towards the end of the academic career, I was starting to teach myself data science, using
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
and
      {' '}
      <Text code>MatPlotLib</Text>
    </Paragraph>
    <Paragraph className="paragraph">
      I've been very fortunate to be selected to study web development as an apprentice at Techtonic LLC.
      {' '}
      <br />
Through the guidance of their awesome instructional team, I had the opportunity to learn
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
We explored both
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
      {' '}
as the database and with frameworks like
      {' '}
      <Text code>Express</Text>
      {' '}
and
      {' '}
      <Text code>Mongoose</Text>
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
My biggest strength is probably my ability to absorb information like a sponge,
      {' '}
      <Text strong>and get super invested in it too.</Text>
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

    </Paragraph>
    <Title level={2}>How to find me</Title>
    <Paragraph className="paragraph">
      I'm loving life in the Broomfield area of Colorado,
    </Paragraph>

    <Paragraph className="paragraph">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/c-p/">Linkedin</a>
        </li>

      </ul>
    </Paragraph>

    <Divider />

  </Typography>
);

export default About;
