import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button, FormCheck, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
function Beforecheckout() {
  return (
    <div className="container">
      <div className="row" style={{ color: "white" }}>
        <div className="col d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img
              src="https://mvmtsports.com/wp-content/uploads/2021/11/MVMT-Master-Logo-2020-Deep-Grey-Small.png"
              alt="logo"
              style={{ height: "60px" }}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // textAlign: "center",
          }}
        >
          <div
            className="col-5"
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h6>GUEST CHECKOUT</h6>
            <p style={{ fontWeight: "lighter" }}>
              You can check out without creating an account. You will have a
              chance to create an account later.
            </p>
            <Link to="/checkout">
              <Button
                className="btn btn-dark w-100 rounded-0"
                style={{ fontSize: "small" }}
              >
                {" "}
                CHECKOUT AS GUEST
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="col-5"
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h6>RETURNING CUSTOMER</h6>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "14px" }}>* Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "14px" }}>* Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Link to="/checkout">
                
                  <Button
                    className="btn btn-dark w-100 rounded-0"
                    style={{ fontSize: "small" }}
                  >
                    {" "}
                    SIGN IN
                  </Button>
                
              </Link>
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="col-5"
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h6>CREATE ACCOUNT</h6>
            <Link to="/signup">
              <Button
                className="btn btn-dark w-100 rounded-0"
                style={{ fontSize: "small" }}
              >
                {" "}
                CREATE AN ACCOUNT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Beforecheckout;
