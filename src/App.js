import React from 'react'
import List from "./components/List";
import image from './images/html.jpg';
import image1 from './images/css.jpg';
import image2 from './images/javascript.jpg';


function App() {
  return (
    <>
<div class="container pt-5">
  <div class="row">
    <div class="col text-center">
    <img src={image} alt="" style={{width:400 }}/>
      <h>Aš mokausi HTML</h>
      <List />
    </div>
    <div class="col text-center">
    <img src={image1} alt="" style={{width:400 }}/>
      <h>Aš mokausi CSS</h>
    <List />
    </div>
    <div class="col text-center">
    <img src={image2} alt="" style={{width:400 }}/>
      <h>Aš mokausi JAVASCRIPT</h>
    <List />
    </div>
  </div>
</div>
    </>
  );
}

export default App;
