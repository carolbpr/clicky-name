import React from "react";
import "./style.css";

function ImgClick(Images) {
console.log(Images);
  return (
    <div className="card container">
      <div className="img-container">
        <img style = {Images.style} alt={Images.name} src={Images.src} onClick={Images.onClick} />
      </div>
    </div>
  );
}
export default ImgClick;
