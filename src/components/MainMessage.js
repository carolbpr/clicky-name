import React from "react";

function Message() {
  return (
    <div style={{ margin: "50px", marginTop:"10%"}}>
      <header className="App-header text-center" >
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </header>
      <main
        className="container"
        style={{ backgroundImage: "url(/background.jpeg)" }}
      ></main>
    </div>
  );
}

export default Message;
