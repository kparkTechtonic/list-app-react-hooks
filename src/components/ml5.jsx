import React, { useEffect, useState } from 'react';
import load from 'load-script';


let classifier;
function Ml5() {
  const [result, setResult] = useState({ name: 'robin, American robin, Turdus migratorius', confidence: '99.99' });
  const [img, setImg] = useState(require('../assets/robin.png'));
  const [ready, setReady] = useState(!!(window.ml5 && classifier));

  if (!window.ml5) {
    load('https://unpkg.com/ml5@0.3.1/dist/ml5.min.js', (err, script) => {
      if (err) {
        // print useful message
      } else {
        load('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js', (err, script) => {
          if (err) {
            // print useful message
          } else {
            // console.log(script.src);// Prints 'foo'.js'
          }
        });
        window.ml5.imageClassifier('MobileNet').then((r) => {
          classifier = r;
          setReady(true);
        });
      }
    });
  }

  useEffect(() => {
    if (ready) {
      setup();
    }
  });

  const image = new Image();
  image.src = img;
  image.width = 320;
  image.height = 240;


  function setup(imageinput) {
    if (!imageinput) {
      classifier.classify(image).then((r) => {
        const { label, confidence } = r[0];
        if (result.name !== label || result.confidence !== (confidence * 100).toFixed(2)) {
          setResult({ name: label, confidence: (confidence * 100).toFixed(2) });
        }
      });
    }
  }


  const handleImageInput = async () => {
    const reader = new FileReader();
    const input = document.querySelector('input');
    reader.readAsDataURL(input.files[0]);

    reader.onload = async () => {
      if (reader.readyState < 1) {
        return;
      }
      const base64img = reader.result;
      // await setImg('');
      await setImg(base64img);
      setResult({ name: '', confidence: '' });
    };
  };


  return (
    <div className="ml5">
      <h1>Image classification, try uploading an image! animals and objects work best</h1>
      {!result.name || !ready ? 'loading...' : <input type="file" name="myImage" accept="image/*" onChange={handleImageInput} />}
      <img src={img} style={{ width: 320, height: 240 }} alt="" />
      <h3>
  The result is:
        {' '}
        {!result.name ? 'Loading...' : result.name}
        {' '}
      </h3>
      <h3>
  with
        {' '}
        {!result.confidence ? 'Loading...' : `${result.confidence}%confidence`}
        {' '}
      </h3>
    </div>
  );
}

export default Ml5;
