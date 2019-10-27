import React from "react";

function NavBar() {
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
              src={"/clicky-game-logo.png"}
              style={{ width: "80%" }}
              alt="GameLogo"
            />
          </li>
          <li style={{ width: "30%", display: "inline-block", float: "none" }}>
            <h3>Click an image to begin!</h3>
          </li>
          <li
            className="navbar-text"
            style={{ width: "30%", display: "inline-block", float: "none" }}
          >
            <h2>SCORE WILL GO HERE</h2>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
