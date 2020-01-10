//first attempt, this was for not real time, image classification. issues in performance when trying to use the image classification in real time. abandoned.
// import * as posenet from '@tensorflow-models/posenet';
import React, { useEffect } from 'react'

export default function MLPosenet() {
  // console.log("reloaded")
  // async function estimatePoseOnImage(imageElement) {
  //   // load the posenet model from a checkpoint
  //   const net = await posenet.load();
  
  //   const pose = await net.estimateSinglePose(imageElement, {
  //     flipHorizontal: false
  //   });
  //   return pose;
  // }

  useEffect(()=>{
    const video = document.getElementById('player');
    var canvas = document.getElementById('canvas'); 
    var ctx = canvas.getContext('2d')    
    const constraints = {
      video: true,
    };
    // Attach the video stream to the video element and autoplay.
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        console.log(stream)      
        video.srcObject = stream;
      });
    //   video.addEventListener('play', function () {
    //     var $this = this; //cache
    //     (function loop() {
    //         if (!$this.paused && !$this.ended) {
    //             canvas.width = video.videoWidth;
    //             canvas.height = video.videoHeight;
    //             // ctx.drawImage($this, 0, 0);
    //             setTimeout(loop, 1000 / 30); // drawing at 30fps
    //             const imageElement = document.getElementById('canvas');
    //             if(imageElement){
    //               estimatePoseOnImage(imageElement)
    //               .then(x=>{
    //                 const {keypoints} = x
    //                 const partsList = {}
    //                 const todisplay = keypoints.map((e)=>{
    //                   if(e.score>.8) {
    //                     return e}
    //                 }).filter(e=>!!e)
              
    //                 todisplay.map((e,id)=>{
    //                   partsList[e.part]=id
    //                 })
              
    //                 for(let parts of todisplay){
    //                     ctx.fillStyle = "#FF0000";
    //                     ctx.fillRect(Number(parts.position.x)-15,Number(parts.position.y)-15,30,30 )
    //                 }
    //                 if(partsList.hasOwnProperty("leftEye")&&partsList.hasOwnProperty("rightEye")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftEye].position.x, todisplay[partsList.leftEye].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightEye].position.x, todisplay[partsList.rightEye].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
    //                 if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("rightShoulder")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftElbow")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("leftWrist")&&partsList.hasOwnProperty("leftElbow")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftWrist].position.x, todisplay[partsList.leftWrist].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightElbow")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightWrist")&&partsList.hasOwnProperty("rightElbow")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightWrist].position.x, todisplay[partsList.rightWrist].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightHip")&&partsList.hasOwnProperty("leftHip")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftHip")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightHip")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftHip")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightHip")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftAnkle")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
    //                   ctx.lineTo(todisplay[partsList.leftAnkle].position.x, todisplay[partsList.leftAnkle].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
              
    //                 if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightAnkle")){
    //                   ctx.beginPath();
    //                   ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
    //                   ctx.lineTo(todisplay[partsList.rightAnkle].position.x, todisplay[partsList.rightAnkle].position.y);
    //                   ctx.lineWidth = 10;
    //                   ctx.strokeStyle = '#ff0000';
    //                   ctx.stroke();
    //                 }
    //               });
    //             }
    //         }
    //     })();
    // }, 0);

      // return clearInterval(canvasInterval)
  },[])

  // const capture = () =>{
  //   var canvas = document.getElementById('canvas');     
  //   var video = document.getElementById('player');
  //   var ctx = canvas.getContext('2d');
  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;
  //   ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  
  //   canvas.toBlob = (blob) => {
  //     const img = new Image();
  //     img.src = window.URL.createObjectUrl(blob);
  //   };
  //   const imageElement = document.getElementById('canvas');
  //   estimatePoseOnImage(imageElement)
  //   .then(x=>{
  //     const {keypoints} = x
  //     const partsList = {}
  //     const todisplay = keypoints.map((e)=>{
  //       if(e.score>.8) {
  //         return e}
  //     }).filter(e=>!!e)

  //     todisplay.map((e,id)=>{
  //       partsList[e.part]=id
  //     })

  //     for(let parts of todisplay){
  //         console.log(parts.position.x,parts.position.y)
  //         ctx.fillStyle = "#FF0000";
  //         ctx.fillRect(Number(parts.position.x)-15,Number(parts.position.y)-15,30,30 )
  //     }
  //     if(partsList.hasOwnProperty("leftEye")&&partsList.hasOwnProperty("rightEye")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftEye].position.x, todisplay[partsList.leftEye].position.y);
  //       ctx.lineTo(todisplay[partsList.rightEye].position.x, todisplay[partsList.rightEye].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }
  //     if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("rightShoulder")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
  //       ctx.lineTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftElbow")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
  //       ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("leftWrist")&&partsList.hasOwnProperty("leftElbow")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftWrist].position.x, todisplay[partsList.leftWrist].position.y);
  //       ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightElbow")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
  //       ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightWrist")&&partsList.hasOwnProperty("rightElbow")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightWrist].position.x, todisplay[partsList.rightWrist].position.y);
  //       ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightHip")&&partsList.hasOwnProperty("leftHip")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
  //       ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftHip")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
  //       ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightHip")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
  //       ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftHip")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
  //       ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightHip")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
  //       ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftAnkle")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
  //       ctx.lineTo(todisplay[partsList.leftAnkle].position.x, todisplay[partsList.leftAnkle].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }

  //     if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightAnkle")){
  //       ctx.beginPath();
  //       ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
  //       ctx.lineTo(todisplay[partsList.rightAnkle].position.x, todisplay[partsList.rightAnkle].position.y);
  //       ctx.lineWidth = 10;
  //       ctx.strokeStyle = '#ff0000';
  //       ctx.stroke();
  //     }
  //   });
  //   // console.log(pose);
  // }




  return (
    <div className="App">
    <video id="player" controls autoPlay style={{}}></video>
    {/* <button onClick={capture}>Capture</button> */}
    <canvas id="canvas" style={{}} />
  <div>
  </div>
    </div>
  );
}

