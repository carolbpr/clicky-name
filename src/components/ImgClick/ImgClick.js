import React from "react";
import "./style.css";
function ImgClick(Images) {
  return (
    <div className="card container">
      <div className="img-container">
        <img alt={Images.name} src={Images.src} />
      </div>
    </div>
  );
}

export default ImgClick;
