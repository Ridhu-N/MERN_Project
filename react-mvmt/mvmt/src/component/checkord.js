import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function CheckOrd() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div
            className="card col-6 b-2"
            style={{
              height: "115vh",
              marginTop: "10rem",
              padding: 0,
              backgroundColor: "rgba(242,235,229,1)",
            }}
          >
            <div
              className="card-header text-center"
              style={{ backgroundColor: "white" }}
            >
              <h1 style={{ textAlign: "center" }}>CHECK ORDER</h1>
              <h4 style={{ color: "#484747", textAlign: "center" }}>
                For orders within the US, use the form below to track your
                order. For international orders, you can track your order here:
                ESW TRACKING PORTAL
              </h4>
            </div>
            <div className="card-body">
              <form id="frmord">
                <div className="form-group">
                  <label htmlFor="ordnum">*Order Number</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="ordnum"
                    aria-describedby="emailHelp"
                  />
                  <p id="errorord"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="emailcreate">*Order Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="emailcreate"
                  />
                  <p id="erroreord"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="passord">*Billing Zip code</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="passord"
                  />
                  <p id="errorepass"></p>
                </div>
                <button type="submit" className="btn btn-dark" id="subord">
                  check status
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOrd;
