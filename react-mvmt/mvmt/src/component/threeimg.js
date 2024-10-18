import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Threemap,ThreemapII} from "./threemap";

const theenimg = [
  {
    Image:
      "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2Ff6d634412ac7484a9524b1a499e35e48",
    des: "Bracelets",
    sdes: "SHOP NOW",
  },
  {
    Image:
      "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F1674456a2de64e95b9d2ee1145794a6a",
    des: "Necklaces",
    sdes: "SHOP NOW",
  },
  {
    Image:
      "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2Fa3b7d41a1fc34cf7bf7c6f36ebf06d8f",
    des: "Sunglasses",
    sdes: "SHOP NOW",
  },
];

const theenimgII = [
    {
      Image:"https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F221fd199434c44d69105cc3a14b896c5",
      des: "Bracelets",
      sdes: "SHOP NOW",
    },
    {
      Image:"https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F0a25f1ca5a4849d6886eeb58a800f5dc",
      des: "Necklaces",
      sdes: "SHOP NOW",
    },
    {
      Image:
        "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2Fbee14ff9279e4b1ea8340bb58f5888d1",
      des: "Sunglasses",
      sdes: "SHOP NOW",
    },
  ];
function Threeimg() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(242,235,229,1)",
        marginTop: "2rem",
        paddingTop: "2rem",
        height:"28rem"
      }}
    >
      <div className="row">
        <div className="col"></div>
        <div className="col" style={{ display: "flex" }}>
          {theenimg.map((ele) => {
            return <Threemap p1={ele.Image} p2={ele.des} p3={ele.sdes} />;
          })}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

function ThreeimgII() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgba(242,235,229,1)",
          marginTop: "2rem",
          paddingTop: "2rem",
          height:"28rem"
        }}
      >
        <div className="row">
          <div className="col"></div>
          <div className="col" style={{ display: "flex" }}>
            {theenimgII.map((ele) => {
              return <ThreemapII p1={ele.Image} p2={ele.des} p3={ele.sdes} />;
            })}
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
  
export {Threeimg,ThreeimgII};
