# Faciem-Deprehendatur 🤖

  * Faciem-Deprehendatur is a web application which can our Real Time AI Face Landmark Detection 
  * Its a great technique that uses Machine Learning , Deep Learning and Artificial Intelligance to detect different points on our face
  * The points detected when combined together generates a mesh on the face . The Face Detector in this project detects 486 3D facial landmarks to infer the approximate surface 
    geometry of a human face .
    
    
 ## So now u must have known how SnapChat and Instagram apply filters on our face😍.  They also do Facial Landmark detection to apply filters.

| Example 1  | Example 2 | Example 3 |
| --- | ----------- | -----------|
| <img align="left" height="390" width="200" src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image1.jpg"> | <img align="left" height="390" width="200"  src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image2.jpg"> | <img align="left" height="390" width="200"  src="https://github.com/Jassi10000/faciem-deprehendatur/blob/main/SampleImages/Image3.jpg"> | 


# General workflow :
  The project requires usage of pre-trained model named as " FaceMesh 😊 " , it simply detects our face in real time and shows a 3D mesh on our face
  * A webcam stream is created inside a front-end React App
  * FaceMesh model is loaded from TensorFlow.Js Library and detections are made from the webcam stream running
  * Keypoints and Triangles are drawn on JavaScript Canvas


