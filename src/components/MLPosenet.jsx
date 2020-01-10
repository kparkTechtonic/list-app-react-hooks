import React, { useEffect, useState } from 'react';
import load from 'load-script';


let classifier;
function Ml5() {
  var video
  var canvas
  
  useEffect(() => {
    var localstream;
    video = document.getElementById('player');
    canvas = document.getElementById("canvas")
    console.log(video)
    navigator.mediaDevices.getUserMedia({video:true})
    .then((stream) => {
      localstream = stream
      video.srcObject = stream;
      setTimeout(()=>{
        if(window.ml5){  
          canvas.height=video.videoHeight
          canvas.width=video.videoWidth
          var ctx = canvas.getContext('2d')
          video.height=video.videoHeight
          video.width=video.videoWidth
          console.log(video)
          const poseNet = window.ml5.poseNet(video, modelLoaded);
          function modelLoaded() {
            console.log("Model Loaded!");
          }
          poseNet.on("pose",results=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            results.forEach(e=>{
              if(e.pose.score > 0.1){
                const {keypoints} = e.pose
                const partsList = {}
                const todisplay = keypoints.map((e)=>{
                  if(e.score>.1) {
                    return e}
                }).filter(e=>!!e)

                todisplay.map((e,id)=>{
                  partsList[e.part]=id
                })

                for(let parts of todisplay){
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(Number(parts.position.x)-15,Number(parts.position.y)-15,30,30 )
                }
                if(partsList.hasOwnProperty("leftEye")&&partsList.hasOwnProperty("rightEye")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftEye].position.x, todisplay[partsList.leftEye].position.y);
                        ctx.lineTo(todisplay[partsList.rightEye].position.x, todisplay[partsList.rightEye].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                      if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("rightShoulder")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                        ctx.lineTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftElbow")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                        ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("leftWrist")&&partsList.hasOwnProperty("leftElbow")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftWrist].position.x, todisplay[partsList.leftWrist].position.y);
                        ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightElbow")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                        ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightWrist")&&partsList.hasOwnProperty("rightElbow")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightWrist].position.x, todisplay[partsList.rightWrist].position.y);
                        ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightHip")&&partsList.hasOwnProperty("leftHip")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                        ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftHip")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                        ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightHip")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                        ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftHip")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
                        ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightHip")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
                        ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftAnkle")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
                        ctx.lineTo(todisplay[partsList.leftAnkle].position.x, todisplay[partsList.leftAnkle].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
                
                      if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightAnkle")){
                        ctx.beginPath();
                        ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
                        ctx.lineTo(todisplay[partsList.rightAnkle].position.x, todisplay[partsList.rightAnkle].position.y);
                        ctx.lineWidth = 10;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                      }
              }
            })
          })
        }
        if (!window.ml5) {
          load('https://unpkg.com/ml5@0.3.1/dist/ml5.min.js', (err, script) => {
            if (err) {
              console.log(err)
            } else {
              load('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js', (err, script) => {
                if (err) {
                } else {
                }
              });
              if(window.ml5){  
                canvas.height=video.videoHeight
                canvas.width=video.videoWidth
                var ctx = canvas.getContext('2d')
                video.height=video.videoHeight
                video.width=video.videoWidth
                console.log(video)
                const poseNet = window.ml5.poseNet(video, modelLoaded);
                function modelLoaded() {
                  console.log("Model Loaded!");
                }
                poseNet.on("pose",results=>{
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  results.forEach(e=>{
                    if(e.pose.score > 0.1){
                      const {keypoints} = e.pose
                      const partsList = {}
                      const todisplay = keypoints.map((e)=>{
                        if(e.score>.1) {
                          return e}
                      }).filter(e=>!!e)
  
                      todisplay.map((e,id)=>{
                        partsList[e.part]=id
                      })
  
                      for(let parts of todisplay){
                          ctx.fillStyle = "#FF0000";
                          ctx.fillRect(Number(parts.position.x)-15,Number(parts.position.y)-15,30,30 )
                      }
                      if(partsList.hasOwnProperty("leftEye")&&partsList.hasOwnProperty("rightEye")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftEye].position.x, todisplay[partsList.leftEye].position.y);
                              ctx.lineTo(todisplay[partsList.rightEye].position.x, todisplay[partsList.rightEye].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                            if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("rightShoulder")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                              ctx.lineTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftElbow")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                              ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("leftWrist")&&partsList.hasOwnProperty("leftElbow")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftWrist].position.x, todisplay[partsList.leftWrist].position.y);
                              ctx.lineTo(todisplay[partsList.leftElbow].position.x, todisplay[partsList.leftElbow].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightElbow")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                              ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightWrist")&&partsList.hasOwnProperty("rightElbow")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightWrist].position.x, todisplay[partsList.rightWrist].position.y);
                              ctx.lineTo(todisplay[partsList.rightElbow].position.x, todisplay[partsList.rightElbow].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightHip")&&partsList.hasOwnProperty("leftHip")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                              ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("leftShoulder")&&partsList.hasOwnProperty("leftHip")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftShoulder].position.x, todisplay[partsList.leftShoulder].position.y);
                              ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightShoulder")&&partsList.hasOwnProperty("rightHip")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightShoulder].position.x, todisplay[partsList.rightShoulder].position.y);
                              ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftHip")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
                              ctx.lineTo(todisplay[partsList.leftHip].position.x, todisplay[partsList.leftHip].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightHip")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
                              ctx.lineTo(todisplay[partsList.rightHip].position.x, todisplay[partsList.rightHip].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("leftKnee")&&partsList.hasOwnProperty("leftAnkle")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.leftKnee].position.x, todisplay[partsList.leftKnee].position.y);
                              ctx.lineTo(todisplay[partsList.leftAnkle].position.x, todisplay[partsList.leftAnkle].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                      
                            if(partsList.hasOwnProperty("rightKnee")&&partsList.hasOwnProperty("rightAnkle")){
                              ctx.beginPath();
                              ctx.moveTo(todisplay[partsList.rightKnee].position.x, todisplay[partsList.rightKnee].position.y);
                              ctx.lineTo(todisplay[partsList.rightAnkle].position.x, todisplay[partsList.rightAnkle].position.y);
                              ctx.lineWidth = 10;
                              ctx.strokeStyle = '#ff0000';
                              ctx.stroke();
                            }
                    }
                  })
                })
              }
            }
          });
        }
      },2000)

    })
    return ()=>{
      localstream.getTracks()[0].stop()
    }

  })


 



  return (
    <div className="app">
      <video id="player" controls autoPlay width={"1280"} height={"720"} style={{position:"absolute"}}>
      </video>
      <canvas id="canvas" style={{position:"absolute"}} />

      
    </div>
  );
}

export default Ml5;
