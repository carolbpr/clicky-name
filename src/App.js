import React from "react";

const style = {
  navbar: {
    backgroundColor: "purple"
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-dark" style={{ backgroundColor: "#4D90FE" }}>
          <span class="navbar-brand mb-0 h1">Clicky Game</span>
          <span class="navbar-text text-center" style={{justifyContent:"center"}}>Click an image to begin!</span>
          <span class="navbar-text text-center" style={{justifyContent:"center"}}>SCORE WILL GO HERE</span>
        </nav>
      </header>
    </div>
  );
}

export default App;
