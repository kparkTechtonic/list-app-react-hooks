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
          classifier = r.model;
          setReady(true);
          console.log('ready');
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
  console.log('image processing ready');
  image.width = 320;
  image.height = 240;

  function gotResult(error, results) {
    console.log('gotresults');
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      setResult({ name: results[0].label, confidence: (results[0].confidence * 100).toFixed(2) });
    }
  }

  function setup(imageinput) {
    console.log('setup');
    console.log(imageinput);
    console.log(image);
    if (!imageinput) {
      console.log('inside the conditional');
      classifier.classify(image, gotResult).then(r => console.log(r));
    }
  }


  const handleImageInput = async () => {
    const reader = new FileReader();
    const input = document.querySelector('input');
    reader.readAsDataURL(input.files[0]);

    reader.onload = async () => {
      console.log(reader.readyState);
      if (reader.readyState < 1) {
        console.log('reader ready');
        return;
      }
      const base64img = reader.result;
      // await setImg('');
      await setImg(base64img);
      setResult({ name: '', confidence: '' });
      console.log(img);
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
  // return (
  //   <div />
  );
}

export default Ml5;
