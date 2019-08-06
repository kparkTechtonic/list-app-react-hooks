import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Context from './Context';
import './App.css';
import Maindisplay from './components/Maindisplay';
import Form from './components/Form';
import Calculator from './components/calculator';
import OldIFrames from './components/oldIFrames';
import Project from './components/projects';
import About from './components/about';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  const [data, setData] = useState('');
  const [formData, setFormData] = useState({});
  const [projects] = useState([
    { title: 'CarDealership', description: 'Intro to vanilla JS', port: 5500 },
    { title: 'TeslaWebsite', description: 'Intro to html/CSS', port: 4500 },
    { title: 'Library', description: 'Intro to DOM manipulation', port: 4000 },
    { title: 'Calculator', description: 'intro to React', port: 6000 },
    { title: 'ChatApp', description: 'intro to express, mongo & SSE', port: 7000 },
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

  const url = window.location.pathname;
  let horizontalStoredNavKey = '';
  url === '/' ? horizontalStoredNavKey = '1' : url === '/project' ? horizontalStoredNavKey = '2' : url === '/About' ? horizontalStoredNavKey = '3' : horizontalStoredNavKey = '';

  let verticalStoredNavKey = '';
  url === '/OldIFrames/CarDealership' ? verticalStoredNavKey = '1' : url === '/OldIFrames/TeslaWebsite' ? verticalStoredNavKey = '2' : url === '/OldIFrames/Library' ? verticalStoredNavKey = '3' : url === '/Calculator' ? verticalStoredNavKey = '4' : verticalStoredNavKey = '';

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
              defaultSelectedKeys={[horizontalStoredNavKey]}
              style={{ lineHeight: '64px' }}
            >

              <Menu.Item key="1">
                <Link to="/">
            Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/project">
            Projects
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/About">
            About me
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[verticalStoredNavKey]}
                defaultOpenKeys={['1']}
                style={{
                  height: '90vh',
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
                  <Menu.Item key="4">
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
                <SubMenu
                  key="sub2"
                  title={(
                    <span>
                      <Icon type="laptop" />
                Current projects
                    </span>
                )}
                >
                  <Menu.Item key="6">
                    <Link to="/form">
          New List
                    </Link>
                  </Menu.Item>
                  {populateNav()}
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={(
                    <span>
                      <Icon type="notification" />
                subnav 3
                    </span>
                )}
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
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
