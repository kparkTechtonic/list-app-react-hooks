import React, { useEffect, useState } from 'react';

const classifier = window.ml5.imageClassifier('MobileNet');
function Ml5() {
  const [result, setResult] = useState({ name: '', confidence: '' });
  const [img, setImg] = useState(require('../assets/robin.png'));


  useEffect(() => {
    // console.log(classifier)
    const image = new Image();
    image.src = img;
    image.width = 320;
    image.height = 240;
    function gotResult(error, results) {
      if (error) {
        console.error(error);
      } else {
        // console.log(results);
        setResult({ name: results[0].label, confidence: (results[0].confidence * 100).toFixed(2) });
      }
    }
    function setup(imageinput) {
      if (!imageinput) {
        classifier.classify(image, gotResult);
      }
    }
    setup();
  }, [img]);

  const imageHandle = async () => {
    const reader = new FileReader();
    const input = document.querySelector('input');
    // console.log(input.files[0]);
    // console.log(reader.readAsDataURL(input.files[0]))


    reader.readAsDataURL(input.files[0]);

    reader.onload = async () => {
      if (reader.readyState < 1) {
        console.log('returning');
        console.log(reader);
        return;
      }
      const base64img = reader.result;
      await setImg('');
      await setImg(base64img);
      setResult({ name: '', confidence: '' });
    // let imageinput = new Image(base64img)
    // console.log(imageinput)
    // setup(imageinput)
    };
  };


  return (
    <div className="ml5">
      <h1>Image classification, try uploading an image!</h1>
      {!result.name ? 'loading...' : <input type="file" name="myImage" accept="image/*" onChange={imageHandle} />}
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
