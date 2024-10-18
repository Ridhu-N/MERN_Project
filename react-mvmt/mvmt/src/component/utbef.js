import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { ArrowLeft } from "react-bootstrap-icons";
import Admanage from "./admanage";
function Utbef() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Admanage />
        </div>
        <div className="col-10">
          {/* <Link to="/adminmanage">
            <ArrowLeft
              style={{
                color: "white",
                backgroundColor: "rgba(121,104,91)",
                width: "50px",
                height: "30px",
                fontSize: "10px",
              }}
            />
          </Link> */}
          <div
            className="row d-flex justify-content-center "
            style={{ paddingTop: "10%" }}
          >
            <div className="col-12">
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "100px",
                  fontSize: "2.5em",
                  color: "rgba(121,104,91,1)",
                }}
              >
                Utility Management
              </h4>
            </div>
            <div
              className="col-3 p-3 m-2"
              style={{ backgroundColor: "rgba(121,104,91,1)" }}
            >
              <Link
                to="/utmanbef"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h4>Category</h4>
              </Link>
            </div>
            <div
              className="col-3 p-3 m-2"
              style={{ backgroundColor: "rgba(121,104,91,1)" }}
            >
              <Link
                to="/utmansbef"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h4>Sub-Category</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Utbef;
