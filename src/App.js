import React, { Component } from "react";
import Message from "./components/MainMessage";
import Wraper from "./components/Wrapper";
import ImgClick from "./components/ImgClick/ImgClick";
import NavBar from "./components/NavBar";
import Images from "./Images.json";

class App extends Component {
  // Setting this.state.Images to the friends json array
  state = {
    Images
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <NavBar/>
      <Message/>
      <div style={{backgroundImage:"url(/background.jpeg)"}}>
      <Wraper>
        
        {this.state.Images.map(image => (
            <ImgClick alt={image.name} src={image.src}/>
          
        ))}
        
      </Wraper>
      </div>
      </div>
    );
  }
}

export default App;
