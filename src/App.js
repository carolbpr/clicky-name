import React, { Component } from "react";
import Message from "./components/MainMessage";
import Wraper from "./components/Wrapper";
import ImgClick from "./components/ImgClick/ImgClick";
import NavBar from "./components/NavBar";
import Images from "./Images.json";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
class App extends Component {
  // Setting this.state.Images to the friends json array
  state = {
    Images
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const shuffledImages = shuffleArray(this.state.Images);
    return (
      <div>
      <NavBar/>
      <Message/>
      <div style={{backgroundImage:"url(/background.jpeg)"}}>
      <Wraper>
        
        {shuffledImages.map(image => (
            <ImgClick alt={image.name} src={image.src}/>
          
        ))}
        
      </Wraper>
      </div>
      </div>
    );
  }
}

export default App;
