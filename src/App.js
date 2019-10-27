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
let clickedImg = [];

class App extends Component {
  // Setting this.state.Images to the friends json array
  state = {
    Images: shuffleArray(Images),
    score: 11,
    topScore: 11,
    message: "Click an image to begin!"
  };
  shuffleThis = () => {
    this.setState({ Images: shuffleArray(this.state.Images) });
  };

  handleClick = name => {
    let image = name;
    console.log(image);
    if (clickedImg.includes(image)) {
      this.setState({ score: 0, message: "You guessed incorrectly!" });
      clickedImg = [];
    } else if (!clickedImg.includes(image)) {
      clickedImg.push(image);
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
      console.log(clickedImg);
      let score = this.state.score + 1;
      if (score > this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
        if (this.state.topScore +1 === 12) {
          this.setState({
            score: 0,
            topScore: 0,
            message: "You won! Let's try again"
          });
          clickedImg = [];
        }
      }
    }
    this.shuffleThis();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    //const shuffledImages = this.state.Images;
    return (
      <div>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Message />
        <div style={{ backgroundImage: "url(/background.jpeg)" }}>
          <Wraper>
            {Images.map(image => (
              <ImgClick
                alt={image.name}
                src={image.src}
                onClick={() => {
                  this.handleClick(image.name);
                }}
              />
            ))}
          </Wraper>
        </div>
      </div>
    );
  }
}

export default App;
