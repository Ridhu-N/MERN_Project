import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  const nav = useNavigate();
  const initialValues = { email: "", passcre: "" };
  const [values, setValues] = useState({ email: "", passcre: "" });
  // const [formValues, setFormsValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(initialValues.email);

  // const handleInput = (e) => {
  //   setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  // };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    // if ((formErrors.email === "") & (formErrors.passcre === "")) {
      axios
        .post("http://localhost:5000/login", values)
        .then((res) => {
          console.log(res);
          if (res.data === "Success") {
            console.log("Success");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", values.email);
            setIsSubmit(true);
            nav("/");
          } else {
            console.log("Invalid Authentication");
            alert("Invalid Authentication");
          }
        })
        .catch((err) => console.log(err));
    // }
  };
  // useEffect (()=>{
  //   console.log(formErrors);
  // if(Object.keys(formErrors).length === 0 && isSubmit ){
  //   console.log(formValues);
  // }
  // },[formErrors]);

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
    if (!values.passcre) {
      errors.passcre = "passcre is required !";
    }
    //else if (values.passcre.length < 4) {
    //   errors.passcre = "passcre should have atleast 4 characters";
    // }
    else if (values.passcre.length > 12) {
      errors.passcre = "passcre shouldnot exceed morethan 12 character";
    }
    return errors;
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(242,235,229)",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      {/* stringify the text here */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // <Link to="/"></Link>
        // nav("/")
        console.log()
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <pre>.</pre>
      )}

      <div className="row d-flex justify-content-center">
        <div className="col-6 pb-5" style={{ border: "1px solid black" }}>
          <div
            className="card-body"
            id="logincard"
            style={{ backgroundColor: "rgba(242,235,229)" }}
          >
            <h4 style={{ textAlign: "center" }}>WELCOME BACK</h4>
            <h5 style={{ color: "#484747", textAlign: "center" }}>
              Sign into your existing MVMT account to earn rewards, check
              existing orders and more.
            </h5>
            <form id="frm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <p id="errorEmail" style={{ color: "red" }}>
                  {formErrors.email}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="passcre"
                  name="passcre"
                  className="form-control "
                  id="passcre"
                  placeholder="password"
                  value={values.passcre}
                  onChange={handleChange}
                />
                <p id="errorpass" style={{ color: "red" }}>
                  {formErrors.passcre}
                </p>
              </div>
              {/* <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  REMEMBER ME
                </label>
              </div> */}
              <div className="row">
                <div className="col">
                  <button
                    type="submit"
                    name="button"
                    className="btn"
                    id="check1"
                    style={{
                      backgroundColor: "rgba(121,104,91,1)",
                      color: "white",
                      display: "flex",
                    }}
                  >
                    Sign in
                  </button>
                </div>
                <div className="col d-flex justify-content-end">
                  {/* <button
                    type="submit"
                    name="button"
                    className="btn"
                    id="check1"
                    style={{
                      backgroundColor: "rgba(121,104,91,1)",
                      color: "white",
                      display: "flex",
                    }}
                  > */}
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "rgba(121,104,91,1)" }}
                    >
                      {" "}
                      If not signed in? {" "}
                    </Link>
                  {/* </button> */}
                </div>
              </div>
            </form>
            {/* <div className="row">
              <h4 style={{ textAlign: "center" }}>EXPRESS SIGN IN</h4>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-primary w-100">
                  <i
                    className="fa fa-facebook"
                    aria-hidden="true"
                    style={{ fontSize: "medium", color: "white" }}
                  ></i>
                  Facebook
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger w-100">
                  <i
                    className="fa fa-google"
                    aria-hidden="true"
                    style={{ fontSize: "medium" }}
                  ></i>
                  Sign In
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
