import React, { memo, useContext, useEffect } from 'react';
import { Card, Avatar } from 'antd';
import './projects.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';

const Project = memo(() => {
  const { Meta } = Card;
  const { state } = useContext(Context);
  const { projects } = state;

  useEffect(() => {
    document.querySelector('#root > section > section > section > main').scrollTop = 0;
    axios.get('https://us-central1-chat-app-b8cf6.cloudfunctions.net/getAllCors').then(r => console.log('evoking cold start', r.data));
    axios.get('https://us-central1-chat-app-b8cf6.cloudfunctions.net/addComment').then(r => console.log('evoking cold start', r.data)).catch(err => console.log(err));
  }, []);

  const renderProjects = () => projects.map((obj, i) => (
    <Link key={i + obj.title} to={(obj.title === 'Calculator') ? '/Calculator' : (obj.title === 'Chart') ? '/Chart' : `/OldIFrames/${obj.title}`}>
      <Card
        style={{
          width: '300px', Height: '900px', marginRight: '15px', display: 'inline-block',
        }}
        cover={(
          <img alt={obj.title} src={require(`../assets/${obj.title}.png`)} />
        )}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={obj.title}
          description={obj.description}
        />
      </Card>
    </Link>

  ));

  // console.log(renderProjects());
  return (
    <div className="projectContainer">
      {renderProjects()}
    </div>
  );
});

export default Project;

// iframe
// <iframe
//            allowFullScreen
//            style={{
//              width: '1200px', height: '800px', transform: ' scale(.25)',
//            }}
//            className="miniFrame"
//            alt="example"
//            src={(obj.port === 7000) ? 'http://127.0.0.1:7000/cb-frontend/index.html' : (obj.port === 6000) ? 'http://localhost:3000/Calculator' : `http://127.0.0.1:${obj.port}/`}
//            title={obj.title}
//          />
