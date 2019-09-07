import React, { useState } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Layout, Menu,
} from 'antd';
import Context from './Context';
import './App.css';
import Maindisplay from './components/Maindisplay';
import Form from './components/Form';
import Calculator from './components/calculator';
import ml5 from './components/ml5.jsx';
import Chart from './components/Chart';
import OldIFrames from './components/oldIFrames';
import Project from './components/projects';
import About from './components/about';
import Home from './components/home';
import ChartV2 from './components/ChartV2';

const { Header, Content } = Layout;
const url = window.location.pathname;

const App = () => {
  const [data] = useState('');
  const [formData, setFormData] = useState({});
  const [horizontalNav] = useState(
    url === '/' ? '1'
      : url === '/project' ? '2'
        : url === '/About' ? '3'
          : url === '/OldIFrames/CarDealership' ? '2'
            : url === '/OldIFrames/TeslaWebsite' ? '2'
              : url === '/OldIFrames/Library' ? '2'
                : url === '/Calculator' ? '2'
                  : url === '/MachineLearning' ? '2'
                    : url === '/Chart' ? '2'
                      : url === '/ChartV2' ? '2'
                        : '',
  );
  const [projects] = useState([
    {
      title: 'CarDealership',
      description: 'Using vanilla JS',
      longDesc: 'Using class constructors, factories, subclasses and inheritance, a car dealership was constructed and filled with class instantiated cars. Error handling and client side validation was conducted.',
      technologies: 'HTML5, CSS3, ES6',
    },
    {
      title: 'TeslaWebsite',
      description: 'html/CSS, mobile responsive',
      longDesc: 'The Telsa website was recreated using vanilla HTML and CSS. Media queries were done to ensure mobile responsiveness',
      technologies: 'HTML5, CSS3, CSS-flexbox, CSS-grid',
    },
    {
      title: 'Library',
      description: 'Using DOM event',
      longDesc: 'Library project was done using client side storage(indexDB) with the Dexie wrapper. Data was retrieved using Axios and validated before storing in indexDB and being used there.',
      technologies: 'IndexDB, Dexie.js, Axios',
    },
    {
      title: 'Calculator',
      description: 'Using React',
      longDesc: 'The calculator project was done using react. The app is separated into three components, App, Display and Buttons. All the functions, logic and the states lived on App and the states and function references were passed down to the children components',
      technologies: 'React',
    },
    {
      title: 'ChatApp',
      description: 'Using express, mongo & SSE',
      longDesc: 'CRUD(Create Read Update Delete) routes were evoked on the databases using backend end-points. A functional chat app was created. The chat app auto updates by using webhook (previously SSE).',
      technologies: 'NodeJS, Express, CORS, MongoDB, FireStore',
    },
    {
      title: 'Chart',
      description: 'Using Chart.js',
      longDesc: 'Fun side project using Chart.js, a powerful plotting library.',
      technologies: 'React, Chart.js',
    },
    {
      title: 'MachineLearning',
      description: 'Using ml5, p5 and tensorflow.js',
      longDesc: 'A pretrained model (MobileNet, imageClassifier) is imported on load (once) and us run using WebGL to classify images. (works best on objects and some animals)',
      technologies: 'React, ml5, p5, tf.js',
    },
    {
      title: 'ChartV2',
      description: 'Chart.js',
      longDesc: 'Doing more interactive things with Chart.js',
      technologies: 'React, Chart.js',
    },

  ]);

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const response = await axios.get('http://localhost:3002/list/').then((r) => {
  //   //     // console.log(r.data);
  //   //     setData(r.data);
  //   //     return r.data;
  //   //   });
  //   //   return response;
  //   // }
  //   // fetchData();
  // }, []);


  return (
    <Context.Provider
      value={{
        state: {
          data,
          formData,
          setFormData,
          projects,
        },
      }}
    >
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[horizontalNav]}
              style={{ lineHeight: '64px' }}
            >

              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/project">Projects</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/About">About me</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>

            <Layout style={{ marginTop: '64px' }}>
              <Content
                style={{
                  minHeight: 280,
                }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/display" component={Maindisplay} />
                <Route path="/form" component={Form} />
                <Route path="/Calculator" component={Calculator} />
                <Route path="/MachineLearning" component={ml5} />
                <Route exact path="/Chart" component={Chart} />
                <Route exact path="/ChartV2" component={ChartV2} />
                <Route path="/OldIFrames/:id" component={OldIFrames} />
                <Route path="/project" component={Project} />
                <Route path="/About" component={About} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </Context.Provider>
  );
};

export default App;

// const populateNav = () => {
// if (!data) {
//    //return (<Menu.Item key="7">Loading...</Menu.Item>);
//  }
//  return data.map(item => (
//    //<Menu.Item
//      //key={item.time + item.title}
//      //id={item.time}
//    //>
//      //<Link to={`/display/:${item._id}`}>
//        //{item ? item.title : 'loading...'}
//      //</Link>
//    //</Menu.Item>
//  ));
// };

// <SubMenu
//  key="sub2"
//  title={(
//    <span>
//      <Icon type="laptop" />
// Current projects
//    </span>
// )}
// >
//  <Menu.Item key="6">
//    <Link to="/form">
//          New List
//    </Link>
//  </Menu.Item>
//  {populateNav()}
// </SubMenu>


//    <Sider
//              id="none"
//              style={{ background: '#fff' }}
//            //>
//              <Menu
//                //mode="inline"
//                //defaultSelectedKeys={[verticalNav]}
//                //style={{
//                  height: '95vh',
//                  borderRight: 0,
//                  overflow: 'scroll',
//                //}}
//              >
//                //<SubMenu
//                  key="sub1"
//                  title={(
//                    //<span>
//                      <Icon type="user" />
//      Earlier projects

//                    //</span>
//                  )}
//                //>
//                  <Menu.Item key="1">
//                    //<Link to="/OldIFrames/CarDealership">
//                    //CarDealership
//                    //</Link>
//                  </Menu.Item>
//                  <Menu.Item key="2">
//                    //<Link to="/OldIFrames/TeslaWebsite">
//                    //Tesla website
//                    //</Link>
//                  </Menu.Item>
//                  <Menu.Item key="3">
//                    //<Link to="/OldIFrames/Library">
//                    //Library
//                    //</Link>
//                  </Menu.Item>
//                  <Menu.Item key="4" onClick={updateHighlight}>
//                    //<Link to="/Calculator">
//                    //Calculator
//                    //</Link>
//                  </Menu.Item>
//                  <Menu.Item key="5">
//                    //<Link to="/OldIFrames/ChatApp">
//                    //Chat App
//                    //</Link>
//                  </Menu.Item>
//                  <Menu.Item key="6">
//                    //<Link to="/Chart">
//                    //Chart
//                    //</Link>
//                  </Menu.Item>
//                //</SubMenu>


//              </Menu>
//            </Sider>
