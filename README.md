# Faciem-Deprehendatur 🤖

  * Faciem-Deprehendatur is a web application which can do our Real Time AI Face Landmark Detection 
  * Its a great technique that uses Machine Learning , Deep Learning and Artificial Intelligance to detect different points on our face
  * The points detected when combined together generates a mesh on the face . The Face Detector in this project detects 486 3D facial landmarks to infer the approximate surface 
    geometry of a human face .
    
# Tech Stack Used :

 <h3> 🔥 Tensorflow.Js and React.js 💥</h3>
<p>
 <img src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/tfjs.png" width:"100" height="90" />
 <img src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/react1.png" width:"120" height="100" /> 
</p>


## Here's a nice preview of the project by me 😎:
<p align="center">
    <img src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/Project-Giphy/final_6079aa0b3ca5820111058aa1_93885.gif" width="490" height="300"/>
</p>    

## Now its your turn to play 🤹‍♂️ here 👉 <a href="https://faciem-deprehendatur.netlify.app">faciem-deprehendatur</a>

# General workflow ▶:
  The project requires usage of pre-trained model by TensorflowJs named as " FaceMesh 😊 " , it simply detects our face in real time and shows a 3D mesh on our face
  * A webcam stream is created inside a front-end React App
  * FaceMesh model is loaded from TensorFlow.Js Library and detections are made from the webcam stream running
  * Keypoints and Triangles are drawn on JavaScript Canvas [The Blue dots show the 3D Points  and  the Black Lines are the Neural Networks joining those points ]


### ✍ So now u must have known how SnapChat and Instagram apply filters on our face😍.  
### They also do Facial Landmark detection to apply filters. ➡

| Example 1  | Example 2 | Example 3 |
| --- | ----------- | -----------|
| <img align="left" height="410" width="220" src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image1.jpg"> | <img align="left" height="390" width="230"  src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image2.jpg"> | <img align="left" height="390" width="230"  src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image3.jpg"> | 

## 🤖 Future Scope :
The project can be coupled with Iris Detection System to track movements of Iris with the face as well which can used to predict the actions of the targeted person by evaluating his/her expressions.

## 🏍 To use , view or run the code :

<img src="https://media.giphy.com/media/kdiLau77NE9Z8vxGSO/giphy.gif" width="40%"><br>

* Clone / Download :

       git clone https://github.com/your_username_/Project-Name.git
* Open the project in your favorite code editor and do following

       npm install @tensorflow/tfjs @tensorflow-models/face-landmarks-detection react-webcam


## ✍ Contributing :
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

* Fork the Project
* Create your new Branch <code> git checkout -b NewBranchName </code>
* Commit your Changes <code> git commit -m " Description of contribution you made " </code>
* Push to the Branch <code> git push origin NewBranchName </code>
* Open a Pull Request



