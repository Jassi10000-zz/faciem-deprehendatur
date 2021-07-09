import React , { useRef, useEffect } from "react";
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from './utilities';

function App() {

  // setup references for React Webcam and JavaScript Canvas
  const webcamRef = useRef(null);
  const jsCanvasRef = useRef(null);


  // load facemesh
  const runFaceMesh = async () => {

    // this will load a neural network from tf.jsz
    const network = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    // runFaceMesh function will run after every 100 ms to detect 3D points and create a mask
    setInterval(() =>{
        detect(network);
    },10)
  };


  //Detect function
  const detect = async (net) => {
    if(
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){

      // get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;


      //set video's width and height
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;


       //set canvas's width and height
       jsCanvasRef.current.width = videoWidth;
       jsCanvasRef.current.height = videoHeight;


       //make detections
       //net.estimateFaces will receive our network or our neural networks from tensorflow
       //and thus estimateFaces method allows us to detect all of our facial landmarks
       const detectFace = await net.estimateFaces({input:video});
       console.log(detectFace);

       // Get canvas context for drawing 
       const ctx = jsCanvasRef.current.getContext("2d");
       requestAnimationFrame(() => {drawMesh(detectFace,ctx)});

    }
  };

  useEffect(()=>{runFaceMesh()}, []);

  return (
    <div className="App">
      
      <header className="App-header">
      <Webcam ref={webcamRef} style={
        {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480
        }
      }/>

      <canvas ref={jsCanvasRef} style={
        {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480
        }
      }/>
      </header>

    </div>
  );
}

export default App;
