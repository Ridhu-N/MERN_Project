import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button, FormCheck, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import leaficon from "./Image/two-leaves-svgrepo-com.svg";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import { Modal } from "react-bootstrap";
import OrderSummary from "./ordersummary";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [customerData, setCustomerData] = useState({});
  const cusemail = localStorage.getItem("username");
  const [editfname, seteditfname] = useState("");
  const [editlname, seteditlname] = useState("");
  const [editcountry, seteditcountry] = useState("");
  const [editadd1, seteditadd1] = useState("");
  const [editadd2, seteditadd2] = useState("");
  const [editpostalcode, seteditpostalcode] = useState("");
  const [editcity, seteditcity] = useState("");
  const [editphone, seteditphone] = useState("");
  const [editemail, seteditemail] = useState("");
  const [cartData, setCartData] = useState([]);
  let productimg = localStorage.getItem("image");
  let productname = localStorage.getItem("productName");
  let productPrice = localStorage.getItem("price");
  productPrice = productPrice ? parseFloat(productPrice) : 0;
  // const [amount, setAmount] = useState(productPrice * count);

  let bill = localStorage.getItem("bill");
  let color = localStorage.getItem("color");
  console.log(productPrice);

  useEffect(() => {
    fetchCustomers();
  }, [cusemail]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getcustomer/${cusemail}`
      );
      const customerData = response.data[0];
      setCustomerData(customerData);
      setFormValues({
        fname: customerData.fname || "",
        lname: customerData.lname || "",
        country: customerData.country || "",
        add1: customerData.add1 || "",
        add2: customerData.add2 || "",
        postalcode: customerData.postalcode || "",
        city: customerData.city || "",
        phone: customerData.phone || "",
        email: customerData.email || "",
      });
      console.log(customerData);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleButtonClick = () => {
  //   setShowModal(true);
  // };

  function handleCloseModal() {
    setShowModal(false);
  }

  const initialValues = {
    fname: "",
    lname: "",
    country: "",
    add1: "",
    add2: "",
    postalcode: "",
    city: "",
    phone: "",
    email: "",
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart");
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setOrderData(formValues);
  };

  const handleEdit = async () => {
    console.log(cusemail);
    try {
      const response1 = await axios.get(
        `http://localhost:5000/customerfetch/${cusemail}`
      );
      const data = response1.data;
      seteditfname(data[0].fname);
      seteditlname(data[0].lname);
      seteditcountry(data[0].country);
      seteditadd1(data[0].add1);
      seteditadd2(data[0].add2);
      seteditpostalcode(data[0].postalcode);
      seteditcity(data[0].city);
      seteditemail(data[0].email);
      seteditphone(data[0].phone);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/cusput/${editemail}`,
        {
          fname: editfname,
          lname: editlname,
          country: editcountry,
          add1: editadd1,
          add2: editadd2,
          city: editcity,
          phone: editphone,
          postalcode: editpostalcode,
        }
      );
      if (response.data === "success") {
        fetchCustomers();
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (values.fname === "") {
      errors.fname = "This is a mandatory field";
    }
    if (values.lname === "") {
      errors.lname = "This is a mandatory field";
    }
    if (values.country === "") {
      errors.country = "This is a mandatory field";
    }
    if (values.add1 === "") {
      errors.add1 = "This is a mandatory field";
    }
    if (values.city === "") {
      errors.city = "This is a mandatory field";
    }
    if (values.postalcode === "") {
      errors.postalcode = "This is a mandatory field";
    }
    if (values.phone === "") {
      errors.phone = "This is a mandatory field";
    }
    if (values.phone.length > 10) {
      errors.phone = "The Phone Number should not exceed 10 digits";
    }
    if (values.email === "") {
      errors.email = "This is a mandatory field";
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex">
            <img
              src={leaficon}
              width="50"
              height="50"
              className="ms-auto"
              alt="leaficon"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Profile</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="fname" label="First Name">
                    <Form.Control
                      type="text"
                      name="fname"
                      placeholder="Enter your First Name"
                      value={formValues.fname}
                      onChange={handleChange}
                      className={
                        formErrors.fname && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.fname && isSubmit && (
                      <span className="error">{formErrors.fname}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="lname" label="Last Name">
                    <Form.Control
                      type="text"
                      name="lname"
                      placeholder="Enter your Last Name"
                      value={formValues.lname}
                      onChange={handleChange}
                      className={
                        formErrors.lname && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.lname && isSubmit && (
                      <span className="error">{formErrors.lname}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="country" label="Country">
                    <Form.Control
                      type="text"
                      name="country"
                      placeholder="Enter your Country"
                      value={formValues.country}
                      onChange={handleChange}
                      className={
                        formErrors.country && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.country && isSubmit && (
                      <span className="error">{formErrors.country}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="add1" label="Address Line 1">
                    <Form.Control
                      type="text"
                      name="add1"
                      placeholder="Enter your Address Line 1"
                      value={formValues.add1}
                      onChange={handleChange}
                      className={
                        formErrors.add1 && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.add1 && isSubmit && (
                      <span className="error">{formErrors.add1}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="add2" label="Address Line 2">
                    <Form.Control
                      type="text"
                      name="add2"
                      placeholder="Enter your Address Line 2"
                      value={formValues.add2}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="postalcode" label="Postal Code">
                    <Form.Control
                      type="text"
                      name="postalcode"
                      placeholder="Enter your Postal Code"
                      value={formValues.postalcode}
                      onChange={handleChange}
                      className={
                        formErrors.postalcode && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.postalcode && isSubmit && (
                      <span className="error">{formErrors.postalcode}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="city" label="City">
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Enter your City"
                      value={formValues.city}
                      onChange={handleChange}
                      className={
                        formErrors.city && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.city && isSubmit && (
                      <span className="error">{formErrors.city}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="phone" label="Phone Number">
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      value={formValues.phone}
                      onChange={handleChange}
                      className={
                        formErrors.phone && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.phone && isSubmit && (
                      <span className="error">{formErrors.phone}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <FormGroup>
                  <FloatingLabel controlId="email" label="Email">
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      value={formValues.email}
                      onChange={handleChange}
                      className={
                        formErrors.email && isSubmit ? "input-error" : ""
                      }
                    />
                    {formErrors.email && isSubmit && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </FloatingLabel>
                </FormGroup>
              </div>
            </div>

            <Button
              style={{
                backgroundColor: "rgba(121,104,91)",
                border: "rgba(121,104,91)",
              }}
              onClick={() => handleEdit(customerData.email)}
            >
              Edit Details
            </Button>
            <Link to="/payment">
              <Button
                style={{
                  backgroundColor: "rgba(121,104,91)",
                  border: "rgba(121,104,91)",
                }}
                type="submit"
                className="m-3"
              >
                Continue
              </Button>
            </Link>
          </Form>
        </div>
        {/* <div className="col-md-4">
          <h2 className="text-center">Order Details</h2>
          <hr />

          <div className="col">
            <div className="row">
              <div className="col-6">
                {cartData.map((item) => (
                  <div key={item.id}>
                    <h6>{item.pname}</h6>
                    <p>{item.color}</p>
                    <div key={item.id}>
                        <h6>₹{item.prize}</h6>
                      </div>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {cartData.map((item) => (
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={item.proimg}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>First Name: {formValues.fname}</p>
            <p>Last Name: {formValues.lname}</p>
            <p>Country: {formValues.country}</p>
            <p>Address Line 1: {formValues.add1}</p>
            <p>Address Line 2: {formValues.add2}</p>
            <p>Postal Code: {formValues.postalcode}</p>
            <p>City: {formValues.city}</p>
            <p>Phone Number: {formValues.phone}</p>
            <p>Email: {formValues.email}</p> */}

          <label className="p-2">
            First Name
            <input
              type="text"
              value={editfname}
              onChange={(e) => seteditfname(e.target.value)}
            />
          </label>
          <label className="p-2">
            Last Name
            <input
              type="text"
              value={editlname}
              onChange={(e) => seteditlname(e.target.value)}
            />
          </label>
          <label className="p-2">
            Address 1
            <input
              type="text"
              value={editadd1}
              onChange={(e) => seteditadd1(e.target.value)}
            />
          </label>
          <label className="p-2">
            Address 2
            <input
              type="text"
              value={editadd2}
              onChange={(e) => seteditadd2(e.target.value)}
            />
          </label>
          <label className="p-2">
            city
            <input
              type="text"
              value={editcity}
              onChange={(e) => seteditcity(e.target.value)}
            />
          </label>
          <label className="p-2">
            Postal Code
            <input
              type="text"
              value={editpostalcode}
              onChange={(e) => seteditpostalcode(e.target.value)}
            />
          </label>
          <label className="p-2">
            Phone
            <input
              type="text"
              value={editphone}
              onChange={(e) => seteditphone(e.target.value)}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            confirm
          </Button>
          <Button onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
