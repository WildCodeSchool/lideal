import React from "react";
import "./picture.scss";
import iconePhoto from "../assets/iconePictureBlack.svg";

function Picture() {
  return (
    <div className="picture-container bg-black">
      <div className="picture">
        <h1>yo</h1>
      </div>
      <div className="logo-picture">
        <img src={iconePhoto} alt="iconePhoto" />
      </div>
    </div>
  );
}

export default Picture;
