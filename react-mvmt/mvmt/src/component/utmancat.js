import React, { useState,useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Utmancat() {
  const initialValues = {
    categoryName: "",
    categoryId: "",
    // prize: "",
    // stock: "",
    // deslg: "",
    // dessm: "",
  };
  const nav = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const {categoryName,categoryId} = formValues;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {id} = formValues.categoryId;
  useEffect(()=>{
    axios.get(`http://localhost:5000/utmancat/get/${id}`)
    .then((resp)=>setFormValues({...resp.data[0]}))
     
    },[id])
      
    const handleSubmit=(e)=>{
      e.preventDefault();
  console.log(initialValues.catid);
  e.preventDefault();
        if(!categoryName || !categoryId){
            console.log("Please provide value into each input field!!");
        }else{
            if(!categoryId){
                axios.post("http://localhost:5000/utmancat",{
                    categoryName,
                    categoryId
                }).then(() =>{
                    setFormValues({categoryName: "",categoryId :""});
                })
                .catch((err) => console.log(err.response.data));
                console.log("Contact added Successfully!!")
            }else{
                axios.put(`http://localhost:5000/utmancat/${id}`,{
                  categoryName,
                  categoryId
                }).then(() =>{
                    setFormValues({categoryName : "",categoryId :""});
                })
                .catch((err) => console.log(err.response.data));
                console.log("Contact Updated Successfully!!")
            }
            setTimeout(() => nav("/"),500);
            }
    }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
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
    if (values.categoryName === "") {
      errors.categoryName = "Category is Important";
    }
    if (values.categoryId === "") {
      errors.categoryId = "Sub-Category is important";
    }
    // if (values.prize === "") {
    //   errors.prize = "Enter the offer details";
    // }
    // if (values.stock === "") {
    //   errors.stock = "Please enter the stock details ";
    // }
    // if (values.deslg === "") {
    //   errors.deslg = "Enter Large description about the category";
    // }
    // if (values.dessm === "") {
    //   errors.dessm = "Enter Small description about the category";
    // }
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
        Category View And Edit
      </label>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <input type="date" value={new Date().toISOString().substr(0, 10)} />
        </div> */}
        <div className="row pt-4 ">
          <div className="col-3 d-flex">
            <Form.Group className="mb-3">
              <Form.Label>Category Id</Form.Label>
              <Form.Control name='categoryId' id='categoryId' onChange={handleInputChange} disabled />
            </Form.Group>
            {/* <div className="form-group">
               <select>
                <option>Sales and Offers</option>
                <option>Glasses</option>
                <option>Brand</option>
                <option>Gifting</option>
                <option>Gifting</option>
              </select> 
            </div> */}
          </div>
          <div className="col-3">
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control name='categoryName' id='categoryName' onChange={handleInputChange} value={formValues.categoryName}></Form.Control>
            </Form.Group>
          </div>
          {/* <div className="col-3">
            <Form.Group className="mb-3">
              <Form.Label>Sub-Category</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
          </div> */}
          {/* <div className="col-4">
            <p>Sub-category</p>
            <div className="col-4">
              <select>
                <option>Womens Watches</option>
                <option>Mens Watches</option>
                <option>Best Sellers</option>
                <option>Special edition</option>
                <option>Strap guide</option>
              </select>
            </div>
          </div> */}
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
export default Utmancat;
