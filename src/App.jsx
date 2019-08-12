import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Layout, Menu, Icon,
} from 'antd';
import Context from './Context';
import './App.css';
import Maindisplay from './components/Maindisplay';
import Form from './components/Form';
import Calculator from './components/calculator';
import OldIFrames from './components/oldIFrames';
import Project from './components/projects';
import About from './components/about';
import Home from './components/home';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const url = window.location.pathname;

const App = () => {
  const [data, setData] = useState('');
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
  const [verticalNav] = useState(
    url === '/OldIFrames/CarDealership' ? '1'
      : url === '/OldIFrames/TeslaWebsite' ? '2'
        : url === '/OldIFrames/Library' ? '3'
          : url === '/Calculator' ? '4'
            : '',
  );
  const [projects] = useState([
    { title: 'CarDealership', description: 'Using vanilla JS', port: 5500 },
    { title: 'TeslaWebsite', description: 'html/CSS, mobile responsive', port: 4500 },
    { title: 'Library', description: 'Using DOM event', port: 4000 },
    { title: 'Calculator', description: 'Using React', port: 6000 },
    { title: 'ChatApp', description: 'Using express, mongo & SSE', port: 7000 },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3002/list/').then((r) => {
        // console.log(r.data);
        setData(r.data);
        return r.data;
      });
      return response;
    }
    fetchData();
  }, []);

  const populateNav = () => {
    if (!data) {
      return (<Menu.Item key="7">Loading...</Menu.Item>);
    }
    return data.map(item => (
      <Menu.Item
        key={item.time + item.title}
        id={item.time}
      >
        <Link to={`/display/:${item._id}`}>
          {item ? item.title : 'loading...'}
        </Link>
      </Menu.Item>
    ));
  };

  const updateHighlight = () => {
    setHorizontalNav('2');
  };


  // const updateHorizontalNav = () => {
  //   url === '/' ? horizontalStoredNavKey = '1'
  //     : url === '/project' ? horizontalStoredNavKey = '2'
  //       : url === '/About' ? horizontalStoredNavKey = '3'
  //         : url === '/OldIFrames/CarDealership' ? horizontalStoredNavKey = '2'
  //           : url === '/OldIFrames/TeslaWebsite' ? horizontalStoredNavKey = '2'
  //             : url === '/OldIFrames/Library' ? horizontalStoredNavKey = '2'
  //               : url === '/Calculator' ? horizontalStoredNavKey = '2'
  //                 : horizontalStoredNavKey = '';
  // };

  // const updateVerticalNav = () => {
  //   url === '/OldIFrames/CarDealership' ? verticalStoredNavKey = '1'
  //     : url === '/OldIFrames/TeslaWebsite' ? verticalStoredNavKey = '2'
  //       : url === '/OldIFrames/Library' ? verticalStoredNavKey = '3'
  //         : url === '/Calculator' ? verticalStoredNavKey = '4'
  //           : verticalStoredNavKey = '';
  // };

  // useEffect(() => {
  // //   updateHorizontalNav();
  // //   updateVerticalNav();
  // });

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
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[verticalNav]}
                style={{
                  height: '95vh',
                  borderRight: 0,
                  overflow: 'scroll',
                }}
              >
                <SubMenu
                  key="sub1"
                  title={(
                    <span>
                      <Icon type="user" />
Earlier projects

                    </span>
                  )}
                >
                  <Menu.Item key="1">
                    <Link to="/OldIFrames/CarDealership">
                    CarDealership
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/OldIFrames/TeslaWebsite">
                    Tesla website
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/OldIFrames/Library">
                    Library
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4" onClick={updateHighlight}>
                    <Link to="/Calculator">
                    Calculator
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/OldIFrames/ChatApp">
                    Chat App
                    </Link>
                  </Menu.Item>
                </SubMenu>


              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  minHeight: 280,
                  width: '85vw',
                }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/display" component={Maindisplay} />
                <Route path="/form" component={Form} />
                <Route path="/Calculator" component={Calculator} />
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
