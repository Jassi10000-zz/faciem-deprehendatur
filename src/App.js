import React , {useRef} from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from "react-webcam";

function App() {

  // setup references for React Webcam and JavaScript Canvas
  const webcamRef = useRef(null);
  const jsCanvasRef = useRef(null);




  return (
    <div className="App">
      
      <header className="App-header">
      <Webcam ref={webcamRef} style={
        {
          position: 'absolute',
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign: "center",
          zIndex: 9,
          width: 600,
          height: 480
        }
      }/>

      <canvas ref={jsCanvasRef} style={
        {
          position: 'absolute',
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign: "center",
          zIndex: 9,
          width: 600,
          height: 480
        }
      }/>
      </header>

    </div>
  );
}

export default App;
