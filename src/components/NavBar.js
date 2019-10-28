import React from "react";

function NavBar(props) {
  console.log(props);
  return (
    <div style={{ fontFamily: "Comfortaa, cursive" }}>
      <nav
        className="navbar fixed-top"
        style={{
          backgroundColor: "#4D90FE",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          color: "#FFED00"
        }}
      >
        <ul style={{ width: "100%" }}>
          <li style={{ width: "40%", display: "inline-block", float: "none" }}>
            <img
              src={"./clicky-game-logo.png"}
              style={{ width: "80%" }}
              alt="GameLogo"
            />
          </li>
          <li style={{ width: "30%", display: "inline-block", float: "none" }}>
            <h4>{props.message}</h4>
          </li>
          <li
            className="navbar-text"
            style={{ width: "30%", display: "inline-block", float: "none" }}
          >
            <h3>SCORE: {props.score} | TOP SCORE: {props.topScore}</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
