import React, { useEffect, useState } from 'react';
import './oldIFrames.css';

const OldIFrames = ({ match }) => {
  const [width, setWidth] = useState('100%');
  useEffect(() => {
    window.addEventListener('message', (a) => {
      console.log(a.data);
    });
  }, []);

  const changeWidth = () => {
    if (width === '100%') {
      setWidth('30%');
    } else {
      setWidth('100%');
    }
  };


  if (match.params.id === 'CarDealership') {
    return (
      <iframe title="CarDealership" src="https://carconsoleapp.web.app/?dealershipName=asdf&startingFunds=123123123" frameBorder="0" />);
  }
  if (match.params.id === 'TeslaWebsite') {
    return (
      <div style={{
        position: 'relative', height: '100%', width, display: 'flex', flexDirection: 'row',
      }}
      >
        <iframe title="TeslaWebsite" src="https://tesla-website-recreation.web.app/" frameBorder="0" />
        <button id="resize" onClick={changeWidth}>{width === '100%' ? '< Click to resize' : 'Click to resize >'}</button>
      </div>
    );
  }
  if (match.params.id === 'Library') {
    return (
      <iframe title="Library" src="https://library-phase-one.firebaseapp.com/" frameBorder="0" />);
  }

  if (match.params.id === 'ChatApp') {
    return (
      <>
        <iframe className="shared" title="ChatApp1" src="https://chat-app-b8cf6.web.app/" frameBorder="0" />
        <iframe className="shared" title="ChatApp2" src="https://chat-app-b8cf6.web.app/" frameBorder="0" />
      </>
    );
  }
  return (<>nothing matched</>);
};

export default OldIFrames;
