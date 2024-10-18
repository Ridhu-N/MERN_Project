import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
function Utmanfrm() {
  const initialValues = {
    pname: "",
    pid: "",
    prize: "",
    stock: "",
    deslg: "",
    dessm: "",
  };
  const nav = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(initialValues.catid);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(()=>{
  //   console.log(formErrors);
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  //     console.log(formValues);
  //   }
  // },[formErrors]);

  const validate = (values) => {
    const errors = {};
    // if(values.catid.length === ""){
    //   errors.catid="Category Id is important";
    // }
    if (values.pname === "") {
      errors.pname = "Category is Important";
    }
    if (values.pid === "") {
      errors.pid = "Sub-Category is important";
    }
    if (values.prize === "") {
      errors.prize = "Enter the offer details";
    }
    if (values.stock === "") {
      errors.stock = "Please enter the stock details ";
    }
    if (values.deslg === "") {
      errors.deslg = "Enter Large description about the category";
    }
    if (values.dessm === "") {
      errors.dessm = "Enter Small description about the category";
    }
    return errors;
  };
  return (
    <div
      className="container mt-3"
      style={{
        border: "1px solid black",
        width: "100%",
        backgroundColor: "rgba(242,235,229,1)",
      }}
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // <Link to="/"></Link>
        nav("/login")
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <pre></pre>
      )}
      <label
        style={{
          fontWeight: "bold",
          fontSize: "large",
          backgroundColor: "rgba(121,104,91,1)",
          color: "white",
          width: "100%",
          display: "flex",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        Sub-Category View And Edit
      </label>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <input type="date" value={new Date().toISOString().substr(0, 10)} />
        </div> */}
        
        <div className="row pt-4">
        <div className="col-3">
          <Form.Group className="mb-3">
              <Form.Label>Category Id</Form.Label>
              <Form.Control disabled />
            </Form.Group>
          </div>
          <div className="col-4">
            <p>Category</p>
            <div className="form-group">
              <select style={{width:'250px',height:'30px'}}>
                <option>Sales and Offers</option>
                <option>Glasses</option>
                <option>Brand</option>
                <option>Gifting</option>
                <option>Gifting</option>
              </select>
            </div>
            
          </div>
          
        
            
          
          <div className="col-4">
            <p>Sub-category</p>
            <div className="col-4">
              {/* <select style={{width:'250px',height:'30px'}}>
                <option>Womens Watches</option>
                <option>Mens Watches</option>
                <option>Best Sellers</option>
                <option>Special edition</option>
                <option>Strap guide</option>
              </select> */}

            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-3">
            <Form.Group className="mt-3 mb-3" controlId="forminput">
              <Form.Label>Collection</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-3">
            <Form.Group className="mt-3 mb-3" controlId="forminput">
              <Form.Label>Strap Material</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-3">
            <Form.Group className="mt-3 mb-3" controlId="forminput">
              <Form.Label>Style</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </div> */}
        <button
          className="btn m-3"
          style={{
            backgroundColor: "rgba(121,104,91,1)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
}
export default Utmanfrm;
