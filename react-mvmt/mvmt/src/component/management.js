import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Admanage from "./admanage";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Image } from "react-bootstrap";
function AdminManage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 pt-4">
          <Admanage />
        </div>
        <div className="col">
          <div className="row mt-4" style={{ color: "rgba(121,104,91,1)" }}>
            <div className="col-12">
              <h4>Dashboard</h4>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-4">
              <div className="card">
                <img
                  src="https://s-media-cache-ak0.pinimg.com/736x/ae/a4/f9/aea4f931275fcb8450973e7e169f544b.jpg"
                  alt="promanagement"
                  style={{ height: "300px", width: "1005" }}
                ></img>
                <Link to="/proman">
                  {" "}
                  <button className="btn w-100" style={{backgroundColor:'rgba(121,104,91,1)',color:'white',fontWeight:'bold'}}>
                    Product Management
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src="https://media.licdn.com/dms/image/C5612AQE6nmJiAgA5zg/article-cover_image-shrink_720_1280/0/1522016335635?e=2147483647&v=beta&t=jUXyqPwoD0tNyYVTHdcoCwCOklokFk0G7DSChALSB5g"
                  alt="utilitymanage"
                  style={{ height: "300px", width: "100%" }}
                ></img>
                <Link to="/utbef">
                  <button className="btn w-100" style={{backgroundColor:'rgba(121,104,91,1)',color:'white',fontWeight:'bold'}}>
                    Utility management
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminManage;
