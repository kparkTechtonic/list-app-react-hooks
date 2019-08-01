import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Context from './Context';
import './App.css';
import Maindisplay from './components/Maindisplay.jsx';
import Form from './components/Form.jsx';

const { Header, Content, Footer } = Layout;
const App = memo(() => {
  const [mainDisplay, setMainDisplay] = useState('');
  const [data, setData] = useState('');
  const [formData, setFormData] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3001/list/').then((r) => {
        // console.log(r.data);
        setData(r.data);
        return r.data;
      });
      return response;
    }
    fetchData();
  }, []);

  const populateNav = () => {
    if(!data) {
      return (<Menu.Item key="2">{"Loading..."}</Menu.Item>)}
    return data.map((item, index)=>{
      return (<Menu.Item 
      key={item.time+item.title}
      id={item.time}>                
          <Link to={`/display/:${item._id}`}>
            {item?item.title:"loading..."}
          </Link>
        </Menu.Item>)
    })
  }

  return (
    <Context.Provider
      value={{ state: {data:data, 
                      num:34,
                      formData:formData,
                      setFormData:setFormData} 
            }}
    >
      <Router>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
          
              <Menu.Item key="1">
                <Link to="/">
                 Create list
                </Link>
              </Menu.Item>
              {populateNav()}
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Route path="/display" component={Maindisplay} />
              <Route path="/"exact component={Form} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Router>
    </Context.Provider>
  );
});

export default App;
