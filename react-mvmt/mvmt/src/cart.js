import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ border: "1px solid balck" }}>
          <div className="row">
            <div className="col-2">
              <img
                src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw9e1f8454/images/products/FC01-TIRG_l_1.jpg" alt=""
                style={{ height: "50vh", width: "20vw" }}
                
              ></img>
            </div>
            <div className="col-1"></div>
            <div className="col-6 p-5">
              <h4>NOVA</h4>
              <h4 style={{ color: "grey" }}>ORION ROSE | 38MM</h4>

              <h4 >L25,702.00</h4>
              <p>
                {" "}
                Glamorous rose gold meets bold titanium, a cosmic pairing. The
                38mm Orion Rose channels an awe for the celestial with a
                future-forward design sensibility and dual timezone
                functionality.
              </p>
            </div>
            <div className="col-2">
              <button className="btn btn-success m-4 ">CheckOut</button>
              <button className="btn btn-dark m-4">Back to home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
