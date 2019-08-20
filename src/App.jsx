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

const { Header, Content } = Layout;
const url = window.location.pathname;

const App = () => {
  const [data] = useState('');
  const [formData, setFormData] = useState({});
  const [horizontalNav, setHorizontalNav] = useState(
    url === '/' ? '1'
      : url === '/project' ? '2'
        : url === '/About' ? '3'
          : url === '/OldIFrames/CarDealership' ? '2'
            : url === '/OldIFrames/TeslaWebsite' ? '2'
              : url === '/OldIFrames/Library' ? '2'
                : url === '/Calculator' ? '2'
                  : '',
  );
  const [projects] = useState([
    { title: 'CarDealership', description: 'Using vanilla JS' },
    { title: 'TeslaWebsite', description: 'html/CSS, mobile responsive' },
    { title: 'Library', description: 'Using DOM event' },
    { title: 'Calculator', description: 'Using React' },
    { title: 'ChatApp', description: 'Using express, mongo & SSE' },
    { title: 'Chart', description: 'Using chart.js' },
    { title: 'MachineLearning', description: 'Using ml5, p5 and tensorflow.js' },

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
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/display" component={Maindisplay} />
                <Route path="/form" component={Form} />
                <Route path="/Calculator" component={Calculator} />
                <Route path="/MachineLearning" component={ml5} />
                <Route path="/Chart" component={Chart} />
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
