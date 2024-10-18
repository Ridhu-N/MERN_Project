import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicEg from "./dropdown";
import * as Icon from "react-bootstrap-icons";
function Headercomp() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPYYQmsCiAx9d6NBv5Wu7aYOIbzi-8YFQyEWAAIEZE8EE5ZCrcRHoorLRtGKq4Ez5CqQ&usqp=CAU"
            alt="logo"
            style={{ width: "100px" }}
          ></img>
        </div>
        <div className="col">
          <BasicEg />
        </div>
        <div className="col">
          <BasicEg />
        </div>
        <div className="col">
          <BasicEg />
        </div>
        <div className="col d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Icon.Search className="mr-2" />
            <Icon.ThreeDotsVertical className="mr-2" />
          </div>
          <div className="d-flex align-items-center">
            <Icon.Person className="mr-2" />
            <span className="mr-4">Account</span>
          </div>
          <div className="d-flex align-items-center">
            <Icon.Bag className="mr-2" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headercomp;
