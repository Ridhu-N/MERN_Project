import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const nav = useNavigate();
  const initialValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    conemail: "",
    passcre: "",
    conpassword: "",
    conpasscre: "",
    add1: " ",
    add2: " ",
    postalcode: " ",
    city: " ",
  };
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    conemail: "",
    passcre: "",
    conpassword: "",
    conpasscre: "",
    add1: "",
    add2: "",
    postalcode: "",
    city: "",
  });
  // const [formValues, setFormValues] = useState(values);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // console.log(initialValues.fname);
  const handleChange = (e) => {
    // console.log(e.target);
    // const { name, value } = e.target;
    // setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
    const { name, value } = e.target;
    console.log(e.target);
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", values)
      .then((res) => {
        if (res.data === "Success") {
          console.log("Happy");
          nav("/");
        } else {
          console.log("Sadful");
        }
      })
      .catch((err) => console.log(err));
    setFormErrors(validate(values));
    setIsSubmit(true);
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (values.email === " ") {
      errors.email = "Email is required !";
    } else {
      if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format !";
      }
    }
    if (!values.passcre) {
      errors.passcre = "passcre is Required !";
    } else if (values.passcre.length < 4) {
      errors.passcre = "passcre should have atleast 7 characters";
    } else if (values.passcre.length > 10) {
      errors.passcre = "passcre should not exceed 10 characters";
    }
    if (values.fname === "") {
      errors.fname = "First Name is required";
    }
    if (values.lname === "") {
      errors.lname = "Last Name is required";
    }
    if (values.phone.length < 10) {
      errors.phone = "Phone number is not valid";
    } else {
      if (values.phone.length > 10) {
        errors.phone = "phone number should only have 10 digits";
      }
    }
    if (values.email !== values.conemail) {
      errors.conemail = "emails didn't match";
      console.log(errors.conemail);
    }
    if (values.passcre !== values.conpassword) {
      errors.conpassword = "passcre doesn't match";
    }
    if (values.add1 === "") {
      errors.add1 = "Address 1 cannot be empty";
    }
    if (values.postalcode === "") {
      errors.postalcode = "Postal code is required";
    }
    if (values.city === "") {
      errors.city = "City is required";
    }
    return errors;
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(242,235,229,1)",
        height: "100%",
      }}
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // nav("/")
        console.log()
      ) : (
        //  <pre>{JSON.stringify(formValues,undefined, 2)}</pre>
        <pre>"error"</pre>
      )}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 d-flex ">
          <div className="card">
            <div
              className="card-body"
              id="createacc"
              style={{ backgroundColor: "white" }}
            >
              <form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center" }}>NEW TO MVMT</h2>
                <h6 style={{ color: "GrayText", justifyContent: "center" }}>
                  Create a new MVMT account and earn 1 point back per $1 spent,
                  get faster checkout and be the first to know about our
                  exclusive offers.
                </h6>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fname" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      name="fname"
                      value={values.fname}
                      onChange={handleChange}
                    />
                    <p id="errfname" style={{ color: "red" }}>
                      {formErrors.fname}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lname"
                      value={values.lname}
                      onChange={handleChange}
                    />
                    <p id="errlname" style={{ color: "red" }}>
                      {formErrors.lname}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <p id="errphn" style={{ color: "red" }}>
                      {formErrors.phone}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={values.emailcre}
                      onChange={handleChange}
                    />
                    <p id="erremail" style={{ color: "red" }}>
                      {formErrors.email}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="conemail" className="form-label">
                      Confirm Email*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="conemail"
                      name="conemail"
                      value={values.conemail}
                      onChange={handleChange}
                    />
                    <p id="errconemail" style={{ color: "red" }}>
                      {formErrors.conemail}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="passcre" className="form-label">
                      Password*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passcre"
                      name="passcre"
                      value={values.passcre}
                      onChange={handleChange}
                    />
                    <p id="errpasscre" style={{ color: "red" }}>
                      {formErrors.passcre}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="conpassword" className="form-label">
                      Confirm Password*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="conpassword"
                      name="conpassword"
                      value={values.conpassword}
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{formErrors.conpassword}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="add1" className="form-label">
                      Address Line 1*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add1"
                      name="add1"
                      value={values.add1}
                      onChange={handleChange}
                    />
                    <p id="errpasscre" style={{ color: "red" }}>
                      {formErrors.add1}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="add2" className="form-label">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add2"
                      name="add2"
                      value={values.add2}
                      onChange={handleChange}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.add2}</p> */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{formErrors.city}</p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="postalcode" className="form-label">
                      Postal code*
                    </label>
                    <input
                      type="postalcode"
                      className="form-control"
                      id="postalcode"
                      name="postalcode"
                      value={values.postalcode}
                      onChange={handleChange}
                    />
                    <p id="postalcode" style={{ color: "red" }}>
                      {formErrors.postalcode}
                    </p>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Sign-up to receive the latest updates and promotions from
                    MVMT
                  </label>
                </div>
                <button type="submit" className="btn btn-dark" id="subcreate">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
