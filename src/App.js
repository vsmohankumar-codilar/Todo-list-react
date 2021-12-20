import React,{/* useState,useEffect */} from 'react';

import './app.css';

import Form from './form';

function App() {

const themeChange = () =>{
  var img1=document.getElementById('image');
  
  if (img1.src.match("image/icon-moon.svg")  ) {
    img1.src = "image/icon-sun.svg";
    document.body.style.backgroundColor= '#25273c';
    document.body.style.backgroundImage="bg-desktop-light.jpg";
    document.body.querySelector('.todo-list-wrapper').style.boxShadow = "0 35px 50px rgb(0 0 0 / 50%)";
    var x= document.getElementsByClassName('lists');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#25273c";
      x[i].style.borderBottom = "1px solid #393a4c";
    } 
    document.querySelector('.todo-footer').style.backgroundColor="#25273c";
    document.querySelector('.form-inner').style.backgroundColor="#25273c";
    var y= document.getElementsByClassName('svg');
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.fill="#cacde8";
    
    } 


}
else {
    img1.src = "image/icon-moon.svg";
    document.body.style.backgroundColor='white';
    document.body.querySelector('.todo-list-wrapper').style.boxShadow = "0 35px 50px rgb(194 195 214 / 50%)";
    var x= document.getElementsByClassName('lists');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "white";
      x[i].style.borderBottom = "1px solid #e4e5f1";
    } 
    document.querySelector('.todo-footer').style.backgroundColor="white";
    document.querySelector('.form-inner').style.backgroundColor="white";

    var y= document.getElementsByClassName('svg');
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.fill="black";
    
    } 
}

}
  
  return (
   <>
   
   <div className="container">
     <div className="main-container" >
     
      <div className="header">
            <h1>TODO</h1>
          
            <img src="image/icon-moon.svg" id="image" onClick={themeChange}/>
            
        </div>
      <Form/>

     </div>
   </div>
   </>
  );
}

export default App;