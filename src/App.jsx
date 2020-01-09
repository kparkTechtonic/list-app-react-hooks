import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
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
import ReactNativeFR from './components/ReactNativeFR.jsx';
import ReceptionistApp from './components/ReceptionistApp.jsx';
// import StadiaRecreation from './components/StadiaRecreation.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154594281-1');
const { Header, Content } = Layout;
const url = window.location.pathname;

const App = (props) => {
  const [data] = useState('');
  const [formData, setFormData] = useState({});
  const [horizontalNav] = useState(
    url === '/'
      ? '1'
      : url === '/project'
        ? '2'
        : url === '/About'
          ? '3'
          : url === '/OldIFrames/CarDealership'
            ? '2'
            : url === '/OldIFrames/TeslaWebsite'
              ? '2'
              : url === '/OldIFrames/Library'
                ? '2'
                : url === '/Calculator'
                  ? '2'
                  : url === '/MachineLearning'
                    ? '2'
                    : url === '/Chart'
                      ? '2'
                      : url === '/ChartV2'
                        ? '2'
                        : url === '/OldIFrames/StorageShare'
                          ? '2'
                          : url === '/ReactNativeFR'
                            ? '2'
                            : url === '/ReceptionistApp'
                            ? '2'
                            : url === '/OldIFrames/NLPKaggle'
                            ? '2'
                              : url === '/OldIFrames/SortingAngularD3'
                              ? '2'
                                : '',
  );
  const [projects] = useState([
    {
      title: 'NLPKaggle',
      description: ' NLP sentiment analsis on cellphone reviews.',
      longDesc:
        ' Using machine learning Natural language toolkit, sentiment analysis with naive bayesian statistics on reviews on amazon for cell phones .',
      technologies: ' Python, Numpy, Pandas, Matplotlib, Seaborn, NLTK, sklearn',
    },
    {
      title: 'SortingAngularD3',
      description: ' Angular, Sorting algorithms, D3',
      longDesc:
        'Using Angular and d3, sorting was visualized.',
      technologies: 'Angular D3.js',
    },
    {
      title: 'ReceptionistApp',
      description: ' React Native receptionist app',
      longDesc:
        'React Native. Using the design patterns from the design team, we created a react native receptionist app with slack integration',
      technologies: 'React Native, Slack, react hooks',
    },
    {
      title: 'ReactNativeFR',
      description: ' React Native Facial Recognition',
      longDesc:
        'React Native. Simple react native app with two page navigation, the second accesses the camera roll and draws boxes around faces using expo facial recognition machine learning api.',
      technologies: 'React Native, Expo, Machine Learning, Facial Recognition',
    },
    {
      title: 'StorageShare',
      description: ' A full stack app for sharing storage',
      longDesc:
        'A full stack app with auth, users, listings, reservations, payment. PWA is implemented, google analytics is also running.',
      technologies: 'React, PWA, GCP, Firebase, Auth',
    },
    {
      title: 'ChartV2',
      description: ' Chart.js',
      longDesc: 'Doing more interactive things with Chart.js',
      technologies: 'React, Chart.js',
    },
    {
      title: 'MachineLearning',
      description: ' Using ml5, p5 and tensorflow.js',
      longDesc:
        'A pretrained model (MobileNet, imageClassifier) is imported on load (once) and us run using WebGL to classify images. (works best on objects and some animals)',
      technologies: 'React, ml5, p5, tf.js',
    },
    {
      title: 'Chart',
      description: ' Using Chart.js',
      longDesc: 'Fun side project using Chart.js, a powerful plotting library.',
      technologies: 'React, Chart.js',
    },
    {
      title: 'ChatApp',
      description: ' Using express, mongo & SSE',
      longDesc:
        'CRUD(Create Read Update Delete) routes were evoked on the databases using backend end-points. A functional chat app was created. The chat app auto updates by using webhook (previously SSE).',
      technologies: 'NodeJS, Express, CORS, MongoDB, FireStore',
    },
    {
      title: 'Calculator',
      description: ' Using React',
      longDesc:
        'The calculator project was done using react. The app is separated into three components, App, Display and Buttons. All the functions, logic and the states lived on App and the states and function references were passed down to the children components',
      technologies: 'React',
    },
    {
      title: 'Library',
      description: ' Using DOM event',
      longDesc:
        'Library project was done using client side storage(indexDB) with the Dexie wrapper. Data was retrieved using Axios and validated before storing in indexDB and being used there.',
      technologies: 'IndexDB, Dexie.js, Axios',
    },
    {
      title: 'TeslaWebsite',
      description: ' html/CSS, mobile responsive',
      longDesc:
        'The Telsa website was recreated using vanilla HTML and CSS. Media queries were done to ensure mobile responsiveness',
      technologies: 'HTML5, CSS3, CSS-flexbox, CSS-grid',
    },
    {
      title: 'CarDealership',
      description: ' Using vanilla JS',
      longDesc:
        'Using class constructors, factories, subclasses and inheritance, a car dealership was constructed and filled with class instantiated cars. Error handling and client side validation was conducted.',
      technologies: 'HTML5, CSS3, ES6',
    },
  ]);

  useEffect(() => {
    ReactGA.pageview(props.history.location.pathname);
  });

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
              <Route path="/ReactNativeFR" component={ReactNativeFR} />
              <Route path="/ReceptionistApp" component={ReceptionistApp} />
              {/* <Route path="/StadiaRecreation" component={StadiaRecreation} /> */}
              <Route path="/project" component={Project} {...props} />
              <Route path="/About" component={About} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Context.Provider>
  );
};

export default withRouter(App);
