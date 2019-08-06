import React, { memo, useContext } from 'react';
import { Card, Avatar } from 'antd';
import Context from '../Context';
import './projects.css';
import { Link } from 'react-router-dom';

const Project = memo(() => {
  const { Meta } = Card;
  const { state } = useContext(Context);
  const { projects } = state;


  console.log(projects);

  const renderProjects = () => projects.map((obj, i) => (
    <Link key={i + obj.title} to={(obj.title === 'Calculator') ? '/Calculator' : `/OldIFrames/${obj.title}`}>
      <Card
        style={{
          width: '300px', Height: '900px', marginRight: '15px', display: 'inline-block',
        }}
        cover={(
          <iframe
            allowFullScreen
            style={{
              width: '1200px', height: '800px', transform: ' scale(.25)',
            }}
            className="miniFrame"
            alt="example"
            src={(obj.port === 7000) ? 'http://127.0.0.1:7000/cb-frontend/index.html' : (obj.port === 6000) ? 'http://localhost:3000/Calculator' : `http://127.0.0.1:${obj.port}/`}
            title={obj.title}
          />
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

  console.log(renderProjects());
  return (
    <div className="projectContainer">
      {renderProjects()}
    </div>
  );
});

export default Project;
