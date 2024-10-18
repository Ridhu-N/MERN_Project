import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
function Admin() {
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
      errors.pname = "Product name is Important";
    }
    if (values.pid === "") {
      errors.pid = "Product id is important";
    }
    if (values.prize === "") {
      errors.prize = "Prize of the product is important";
    }
    if (values.stock === "") {
      errors.stock = "Please enter the stock detail";
    }
    if (values.deslg === "") {
      errors.deslg = "Enter Large description";
    }
    if (values.dessm === "") {
      errors.dessm = "Enter Small description about the product";
    }
    return errors;
  };
  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        width: "50%",
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
        PRODUCT VIEW AND EDIT
      </label>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <input type="date" value={new Date().toISOString().substr(0, 10)} /> */}
        </div>
        <div className="row pt-4">
          <div className="col-6">
            <p>Category</p>
            <div className="form-group">
              <select className="form-control">
                <option>--Select Category--</option>
                <option>Sales and Offers</option>
                <option>Glasses</option>
                <option>Brand</option>
                <option>Gifting</option>
                <option>Gifting</option>
              </select>
            </div>
          </div>
          <div className="col-5">
            <p>Sub-category</p>
            <div className="form-group">
              <select className="form-control">
                <option>--Select Sub-Category--</option>
                <option>Womens Watches</option>
                <option>Mens Watches</option>
                <option>Best Sellers</option>
                <option>Special edition</option>
                <option>Strap guide</option>
              </select>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-4">
              <p>Product Name</p>
              <div className="form-group">
                <input
                  type="text"
                  name="pname"
                  value={formValues.pname}
                  onChange={handleChange}
                  className="form-control"
                ></input>
              </div>
              <p style={{ color: "red" }}>{formErrors.pname}</p>
            </div>

            <div className="col-4">
              <p>Product-Id</p>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="pid"
                  value={formValues.pid}
                  onChange={handleChange}
                ></input>
              </div>
              <p style={{ color: "red" }}>{formErrors.pid}</p>
            </div>
            
              <div className="col-4">
                <p>Product Color</p>
                <div className="form-group">
                  <input
                    type="color"
                    name="color"
                    style={{ width: "50%" }}
                  ></input>
                </div>
                {/* <p style={{ color: "red" }}>{formErrors.pname}</p> */}
              </div>
           
            <div className="row pt-4">
              <div className="col-6">
                <p>Prize</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="prize"
                    value={formValues.prize}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  ></input>
                </div>
                <p style={{ color: "red" }}>{formErrors.prize}</p>
              </div>
              <div className="col-6">
                <p>Stock</p>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="stock"
                    value={formValues.stock}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  ></input>
                </div>
                <p style={{ color: "red" }}>{formErrors.stock}</p>
              </div>
            </div>

            <div className="form-check  pt-4">
             Gender Intended
              <div className="row mt-2">
                <div className="col-2 m-3 mt-0">
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                    />
                    Male
                  </label>
                </div>
                <div className="col-2 m-1 mt-0">
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                    />
                    Female
                  </label>
                </div>
                <div className="col-2 m-1 mt-0">
                  <label>
                    <input className="form-check-input"
                    type="radio"
                    name="gender"
                    value="others"/>
                    Others
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <Form.Group className=" mb-3" controlId="forminput">
                <Form.Label>Collection</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className=" mb-3" controlId="forminput">
                <Form.Label>Strap Material</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            
            </div>
            <div className="row">
            <div className="col-6">
              <Form.Group className=" mb-3" controlId="forminput">
                <Form.Label>Style</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="col-5">
              <div className="form-group">
                <>Available Location</>
                <select className="form-control mt-2">
                <option>--Select Location--</option>
                  <option>Tamil Nadu</option>
                  <option>karnataka</option>
                  <option>Kerala</option>
                  <option>Delhi</option>
                  <option>Punjab</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        < div className="row pt-2 d-flex">
          <div className="col-4">
            <Form.Group>
              <Form.Label>Large Description</Form.Label>
              <Form.Control as="textarea" row={3}></Form.Control>
            </Form.Group>
          </div>
          <p style={{ color: "red" }}>{formErrors.deslg}</p>
          <div className="col-4">
            <Form.Group>
              <Form.Label>Small Description</Form.Label>
              <Form.Control as="textarea" row={3}></Form.Control>
            </Form.Group>
          </div>
          <p style={{ color: "red" }}>{formErrors.dessm}</p>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="myfile">Product Images</label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              value={formValues.myfile}
              onChange={handleChange}
              multiple
              style={{ width: "100%" }}
            />

            <br />
            <br />
          </div>
        </div>

        <button
          className="btn"
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
export default Admin;
