import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mywebpImage from "./Image/img1.webp";
import mywebpImageII from "./Image/img2.webp";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function MyImage() {
  return (
    <div className="image-container">
      <img
        className="img-fluid"
        src={mywebpImage}
        alt="name"
        style={{ width: "98.7vw",height: "30rem",
        objectFit: "cover" }}
      />
      <div
        className="shade"
        style={{
          position: "absolute",
          top: "22rem",
          marginLeft: "4rem",
          color: "white",
        }}
       >
        <h6>Just Dropped: Zen Mode Tones</h6>
        <Link to="/productall">
          <Button
            style={{
              backgroundColor: "rgba(155,155,155,1)",
              border: "rgba(155,155,155,1)",
              fontSize: "small",
              position: "absolute",
            }}
          >
            SHOP COLOR STORY
          </Button>
        </Link>
        {""}
      </div>
    </div>
  );
}
function MyImageII() {
  return (
    <div className="image-container">
      <img src={mywebpImageII} alt="name" style={{ width: "98.7vw",height: "30rem",
        objectFit: "cover" }}
 />
      <div
        className="shade"
        style={{
          position: "absolute",
          top: "80rem",
          marginLeft: "4rem",
          color: "white",
        }}
      >
        <h6>The perfect combo of cozy and cool.</h6>
        <p>New chill gold and grey tones.</p>
        <Link to="/productall">
          <Button
            style={{
              backgroundColor: "rgba(155,155,155,1)",
              border: "rgba(155,155,155,1)",
              fontSize: "small",
            }}
          >
            LEARN MORE
          </Button>
        </Link>
        {""}
      </div>
    </div>
  );
}
export { MyImage, MyImageII };
