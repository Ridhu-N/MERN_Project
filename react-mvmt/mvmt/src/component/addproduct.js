import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Addproduct() {
  const initialValues = {
    categoryId: "",
    subcategoryId: "",
    pname: "",
    pid: "",
    color: "",
    gender: "",
    prize: "",
    stock: "",
    deslg: "",
    dessm: "",
    collection: "",
    strapmaterial: "",
    style: "",
    proimg: "",
  };

  const [values, setValues] = useState(initialValues);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(" ");
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getcatpro");
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching Categories:", error);
    }
  };

  const handleCategoryChange = async (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
    setValues({ ...values, categoryName: e.target.value });
    try {
      const response = await axios.get(
        `http://localhost:5000/getsubcatpro?categoryId=${e.target.value}`
      );
      setSubCategories(response.data.subcategories);
      console.log("Subcategories from proman");
      console.log(subcategories);
    } catch (error) {
      console.log("Error fetching subcategories: ", error);
    }
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
    setValues({ ...values, subcategoryId: e.target.value });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setValues({ ...values, gender: e.target.value });
  };
  const nav = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log(initialValues.catid);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:5000/addpro", {
          categoryId: selectedCategory,
          subcategoryId: selectedSubCategory,
          pname: values.pname,
          pid: values.pid,
          color: values.color,
          gender: selectedOption,
          prize: values.prize,
          stock: values.stock,
          deslg: values.deslg,
          dessm: values.dessm,
          collection: values.collection,
          strapmaterial: values.strapmaterial,
          style: values.style,
          proimg: values.proimg,
        });
        if (response.data === "success") {
          console.log("Product added successfully");
          // nav("/proman");
        } else {
          console.log("Failed to add product");
        }
      } catch (error) {
        console.log(error);
      }
    }
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
    if (values.collection === "") {
      errors.collection = "Collection cannot be empty";
    }
    if (values.strapmaterial === "") {
      errors.strapmaterial = "strapmaterial cannot be empty";
    }
    if (values.style === "") {
      errors.style = "style cannot be empty";
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
        // nav("/login")
        console.log()
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
        ADD PRODUCT
      </label>
      <form onSubmit={handleSubmit}>
        <div className="row pt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="categoryName">Category</label>
              <select
                className="form-control"
                name="categoryName"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subcategory">Sub-category</label>
              <select
                className="form-control"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                name="subcategory"
              >
                <option value="">Select a subcategory</option>
                {Array.isArray(subcategories) &&
                  subcategories.map((subcategory) => (
                    <option
                      key={subcategory.subcategory}
                      value={subcategory.subcategoryId}
                    >
                      {subcategory.subcategoryname}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="pname">Product Name</label>
              <input
                type="text"
                name="pname"
                value={values.pname}
                onChange={handleChange}
                className="form-control"
              />
              <p style={{ color: "red" }}>{formErrors.pname}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="pid">Product-Id</label>
              <input
                className="form-control"
                type="text"
                name="pid"
                value={values.pid}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.pid}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="color">Product Color</label>
              <input
                type="text"
                name="color"
                style={{ width: "100%" }}
                value={values.color}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="prize">Prize</label>
              <input
                type="text"
                className="form-control"
                name="prize"
                value={values.prize}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <p style={{ color: "red" }}>{formErrors.prize}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="stock">Stock</label>
              <input
                type="text"
                className="form-control"
                name="stock"
                value={values.stock}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <p style={{ color: "red" }}>{formErrors.stock}</p>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-2 m-3 mt-0">
            <label>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                checked={selectedOption === "male"}
                onChange={handleOptionChange}
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
                checked={selectedOption === "female"}
                onChange={handleOptionChange}
              />
              Female
            </label>
          </div>
          <div className="col-2 m-1 mt-0">
            <label>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                checked={selectedOption === "others"}
                onChange={handleOptionChange}
                value="others"
              />
              Others
            </label>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="collection">Collection</label>
              <input
                type="text"
                name="collection"
                value={values.collection}
                onChange={handleChange}
                className="form-control"
              />
                <p style={{ color: "red" }}>{formErrors.collection}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="strapmaterial">Strap Material</label>
              <input
                type="text"
                name="strapmaterial"
                value={values.strapmaterial}
                onChange={handleChange}
                className="form-control"
              />
                <p style={{ color: "red" }}>{formErrors.strapmaterial}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="style">Style</label>
              <input
                type="text"
                name="style"
                value={values.style}
                onChange={handleChange}
                className="form-control"
              />
                <p style={{ color: "red" }}>{formErrors.style}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="proimg">Product Image</label>
              <textarea
                type="text"
                rows={3}
                name="proimg"
                value={values.proimg}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              <p style={{ color: "red" }}>{formErrors.proimg}</p>
            </div>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="deslg">Large Description</label>
              <textarea
                type="text"
                rows={3}
                name="deslg"
                value={values.deslg}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              <p style={{ color: "red" }}>{formErrors.deslg}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="dessm">Small Description</label>
              <textarea
                type="text"
                rows={3}
                name="dessm"
                value={values.dessm}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              <p style={{ color: "red" }}>{formErrors.dessm}</p>
            </div>
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
export default Addproduct;
