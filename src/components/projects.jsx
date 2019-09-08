import React, { memo, useContext, useEffect } from 'react';
import { Card } from 'antd';
import './projects.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';

const Project = memo((props) => {
  const { state } = useContext(Context);
  const { projects } = state;

  useEffect(() => {
    const script = document.createElement('script');
    const script1 = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js';
    script1.src = 'https://unpkg.com/ml5@0.3.1/dist/ml5.min.js';
    script.async = true;
    script1.async = true;
    document.head.appendChild(script);
    document.head.appendChild(script1);
    document.querySelector('#root > section > section > section > main').scrollTop = 0;
    axios.get('https://us-central1-chat-app-b8cf6.cloudfunctions.net/getAllCors').then(r => console.log('evoking cold start', r.data));
    axios.get('https://us-central1-chat-app-b8cf6.cloudfunctions.net/addColdStart').then(r => console.log('evoking cold start', r.data)).catch(err => console.log(err));
  }, []);

  const renderProjects = () => projects.map((obj, i) => (

    <div
      key={obj.title + i}
      id="card"
      style={{
        width: '300px', height: '320px', margin: '15px', display: 'inline-block', perspective: '1000px', position: 'relative',
      }}
    >
      <div className="innercard">
        <Card
          cover={(
            <img alt={obj.title} style={{ height: '200px', width: '300px' }} src={require(`../assets/${obj.title}.png`)} />
        )}
        >


          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            <img
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{
                width: '3rem', height: '3rem',
              }}
              alt="avatar"
            />
            <div>
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          </div>

        </Card>
        <div
          key={obj.title + i}
          onClick={(obj.title === 'Calculator') ? () => { props.history.push('/Calculator'); }
            : (obj.title === 'Chart') ? () => { props.history.push('/Chart'); }
              : (obj.title === 'ChartV2') ? () => { props.history.push('/ChartV2'); }
                : (obj.title === 'MachineLearning') ? () => { props.history.push('/MachineLearning'); } : () => { props.history.push(`/OldIFrames/${obj.title}`); }}
        >
          <div className="flip-card-back">
            <h1>{obj.title}</h1>
            <p id="techUsed">
            Technologies and concepts:
              {' '}
              {obj.technologies}
            </p>
            <p>{obj.longDesc}</p>
          </div>
        </div>

      </div>
    </div>
  ));

  return (
    <div className="projectContainer">
      {renderProjects()}
    </div>
  );
});

export default Project;

// avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
// <Meta
//  avatar={<Avatar src={avatar} />}
//  title={obj.title}
//  description={obj.description}
// />
