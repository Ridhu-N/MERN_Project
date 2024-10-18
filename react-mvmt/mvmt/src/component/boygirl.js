import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function FeMale() {
  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">
        <div className="col p-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F4ed52acc80e64ff5bd0a958376e16150"
            alt="male"
            style={{ width: "100%" }}
          ></img>
          <div
            className="mens"
            style={{
              position: "absolute",
              top: "2800px",
              marginLeft: "4rem",
              color: "white",
            }}
          >
           <h4>Mens Watches</h4> 
          </div>
        </div>
        <div className="col p-0 ">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F55641559a0664664bc099b6d8f7cb102"
            alt="female"
            style={{ width: "100%" }}
          ></img>
          <div className="womens" style={{
          position: "absolute",
          top: "2800px",
          marginLeft: "4rem",
          color: "white",
        }}><h4>Womens Watches</h4></div>
        </div>
      </div>
    </div>
  );
}
export default FeMale;
