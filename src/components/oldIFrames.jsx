import React, { useEffect, useState } from 'react';
import ReactEmbedGist from 'react-embed-gist';
import './oldIFrames.css';
import '../devices.css';


const OldIFrames = ({ match }) => {
  const [width, setWidth] = useState('100%');
  useEffect(() => {
    // window.addEventListener('message', (a) => {
    //   // console.log(a.data);
    // });
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
  if (match.params.id === 'NLPKaggle') {
    return (
      <ReactEmbedGist gist="kparkTechtonic/e9cabdc2209b73674cf1cbbe7dc60923"/>

      );
  }
  if (match.params.id === 'SortingAngularD3') {
    return (
      <iframe title="SortingAngularD3" src="https://d3js-angular-sort.firebaseapp.com/" frameBorder="0" />);
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
        <iframe className="shared" title="ChatApp1" id="chatApp1" src="https://chat-app-b8cf6.firebaseapp.com/" frameBorder="0" />
        <iframe className="shared" title="ChatApp2" id="chatApp2" src="https://chat-app-b8cf6.firebaseapp.com/" frameBorder="0" />
      </>
    );
  }

  if (match.params.id === 'StorageShare') {
    return (
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 0,
      }}
      >
        <div className="device device-iphone-x">
          <div style={{ maxHeight: '700px', maxWidth: '360px' }} className="device-frame">
            <iframe style={{ borderRadius: '2rem', maxHeight: '700px', maxWidth: '360px' }} title="storageShare" src="https://sub-ducks-storage-share.firebaseapp.com/" frameBorder="0" />
            {' '}

          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>
    );
  }


  return (<>nothing matched</>);
};

export default OldIFrames;
