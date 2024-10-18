import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import AdminManage from "./management";
function AdLogin() {
  const nav = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormsValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(initialValues.email);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormsValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    localStorage.setItem("admin", formValues.email);
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (values.email === "") {
      errors.email = "Email is required !";
    } else {
      if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format !";
      }
    }
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 4) {
      errors.password = "Password should have atleast 7 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password shouldnot exceed morethan 12 character";
    }
    return errors;
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(242,235,229)",
      }}
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // <div className="ui message success">Signed in successfully</div>
        // <Link to="/login"></Link>
        nav("/adminmanage")
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <pre>{Object.keys(formErrors)}</pre>
      )}
      
      <Link to="/">
        <ArrowLeft
          style={{
            backgroundColor: "rgba(121,91,40)",
            fontSize: "35",
            width: "60",
            color: "white",
          }}
        />
      </Link>
      <div
        className="row d-flex justify-content-center "
        style={{ paddingTop: "80px", paddingBottom: "56px" }}
      >
        <div
          className="col-6 pb-4"
          style={{
            border: "1px solid black",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div className="card-body" id="logincard">
            <h3 style={{ textAlign: "center" }}>WELCOME BACK ADMIN</h3>
            <h6 style={{ color: "#484747", textAlign: "center" }}>
              Sign into your existing MVMT account admin to access , check
              existing orders and more.
            </h6>
            <form id="frm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">*Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p id="errorEmail" style={{ color: "red" }}>
                  {formErrors.email}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">*Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p id="errorpass" style={{ color: "red" }}>
                  {formErrors.password}
                </p>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                {/* <label className="form-check-label" htmlFor="exampleCheck1">
                  REMEMBER ME
                </label> */}
              </div>
              <center>
                <button
                  type="submit"
                  name="button"
                  className="btn"
                  id="check1"
                  style={{
                    backgroundColor: " rgba(121,104,91,1)",
                    color: "white",
                    display: "flex",
                  }}
                >
                  Sign in
                </button>
              </center>
              <div className="row"></div>
            </form>
          </div>
        </div>
        <div className="row">
          <p></p>
          <div className="col d-flex justify-content-center">
            <p>Terms and conditions apply | @version2023</p>
          </div>
        </div>
        <div className="row">
          <p></p>
          <div className="col d-flex justify-content-center">
            <p style={{ color: "grey" }}>Designer: Ridhu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdLogin;
