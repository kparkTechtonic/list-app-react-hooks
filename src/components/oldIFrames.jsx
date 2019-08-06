import React, { useEffect } from 'react';
import './oldIFrames.css';

const OldIFrames = ({ match }) => {
  useEffect(() => {
    window.addEventListener('message', (a) => {
      console.log(a.data);
    });
  }, []);


  if (match.params.id === 'CarDealership') {
    return (
      <iframe title="CarDealership" src="http://127.0.0.1:5500/index.html" frameBorder="0" />);
  }
  if (match.params.id === 'TeslaWebsite') {
    return (
      <iframe title="TeslaWebsite" src="http://127.0.0.1:4500/index.html" frameBorder="0" />);
  }
  if (match.params.id === 'Library') {
    return (
      <iframe title="Library" src="http://127.0.0.1:4000/index.html" frameBorder="0" />);
  }

  if (match.params.id === 'ChatApp') {
    return (
      <>
        <iframe className="shared" title="ChatApp1" src="http://127.0.0.1:7000/cb-frontend/index.html" frameBorder="0" />
        <iframe className="shared" title="ChatApp2" src="http://127.0.0.1:7000/cb-frontend/index.html" frameBorder="0" />
      </>
    );
  }
  return (<>nothing matched</>);
};

export default OldIFrames;
