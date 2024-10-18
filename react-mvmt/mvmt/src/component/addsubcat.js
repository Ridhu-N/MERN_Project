// import React, { useState,useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import {ArrowLeft} from "react-bootstrap-icons"
// function AddSubcat() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [subcategoryId, setSubCategoryId] = useState("");
//   const [subcategoryname, setSubCategoryname] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [errors, setErrors] = useState({});
//   const nav = useNavigate();

//   // const [values,setValues] = useState({
//   //   categoryName: selectedCategory,
//   //   subcategoryId : "",
//   //   subcategory: ""
//   // })

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//     console.log(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Selected Category:", selectedCategory);
//     // setErrors(validate(values))
//     if (Object.keys(errors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:5000/addsubcat", {
//           selectedCategory,
//           subcategoryname,
//           subcategoryId,
//         });
//         // console.log(values)
//         console.log(selectedCategory, subcategoryname, subcategoryId);
//         if (response.data === "success") {
//           console.log("Subcategory added successfully");
//           nav("/utmansbef");
//         } else {
//           console.log("Failed to add subcategory");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/getcatpro");
//       setCategories(response.data);
//     } catch (error) {
//       console.log("Error fetching Categories:", error);
//     }
//   };

//   const validate = (values) => {
//     const errors = {};
//     if (values.subcategoryId.trim() === "") {
//       errors.subcategoryId = "enter the subcategory id";
//     }
//     if (values.subcategory.trim() === "") {
//       errors.subcategory = "enter the subcategory";
//     }
//     return errors;
//   };
//   return (
//     <div className="container">
//       <Link to="/utmansbef">
//         <ArrowLeft
//           style={{
//             color: "white",
//             backgroundColor: "rgba(121,104,91)",
//             width: "50px",
//             height: "30px",
//             fontSize: "10px",
//           }}
//         />
//       </Link>
//       <div
//         className="row"
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         <h6 style={{ display: "flex", justifyContent: "center" }}>
//           ADD SUB-CATEGORY
//         </h6>
//         <div
//           className="col-4 m-4"
//           style={{ backgroundColor: "rgba(242,235,229)" }}
//         >
//           <Form onSubmit={handleSubmit}>
//             <Form.Label>Category</Form.Label>
//             <div className="form-group">
//               <select
//                 style={{ height: "35px" }}
//                 value={selectedCategory}
//                 onChange={handleCategoryChange}
//               >
//                 <option value="">Select a category</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.categoryId}>
//                     {category.categoryName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <Form.Group className="mb-3">
//               <Form.Label>Sub-Category Id</Form.Label>
//               <Form.Control
//                 name="subcategoryId"
//                 type="text"
//                 onChange={(e) => setSubCategoryId(e.target.value)}
//                 value={subcategoryId}
//                 isInvalid={!!errors.subcategoryId}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
//               <Form.Label>Sub-Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="subcategory"
//                 onChange={(e) => setSubCategoryname(e.target.value)}
//                 value={subcategoryname}
//                 isInvalid={!!errors.subcategory}
//               />
//             </Form.Group>
//             {/* <Link to="/utmansbef" style={{ color: "white", textDecoration: "none" }}> */}
//             <Button
//               type="submit"
//               style={{
//                 backgroundColor: "rgba(121,104,91,1)",
//                 border: "rgba(121,104,91,1)",
//               }}
//             >
//               Add Sub-category
//             </Button>
//             {/* </Link> */}
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddSubcat;


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ArrowLeft } from "react-bootstrap-icons";

function AddSubcat() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetchCategories();
    generateAutoValue();
  }, []);
  

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getcatpro");
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching Categories:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected Category:", selectedCategory);
    setErrors(validate());

    if (Object.values(errors).every((error) => !error)) {
      try {
        const response = await axios.post("http://localhost:5000/addsubcat", {
          selectedCategory,
          subCategoryId,
          subCategoryName,
        });
        console.log(selectedCategory, subCategoryId, subCategoryName);
        if (response.data === "success") {
          console.log("Subcategory added successfully");
          nav("/utmansbef");
        } else {
          console.log("Failed to add subcategory");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validate = () => {
    const errors = {};
    if (subCategoryId.trim() === "") {
      errors.subCategoryId = "Enter the subcategory ID";
    }
    if (subCategoryName.trim() === "") {
      errors.subCategoryName = "Enter the subcategory";
    }
    return errors;
  };

  const generateAutoValue = () => {
    const firstCharacter = "C"; // Change this to the desired character
    const randomValue = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const autogeneratedValue = `${firstCharacter}${randomValue}`;
    setSubCategoryId(autogeneratedValue);
  };

  return (
    <div className="container">
      <Link to="/utmansbef">
        <ArrowLeft
          style={{
            color: "white",
            backgroundColor: "rgba(121,104,91)",
            width: "50px",
            height: "30px",
            fontSize: "10px",
          }}
        />
      </Link>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h6 style={{ display: "flex", justifyContent: "center" }}>
          ADD SUB-CATEGORY
        </h6>
        <div
          className="col-4 m-4"
          style={{ backgroundColor: "rgba(242,235,229)" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Label>Category</Form.Label>
            <div className="form-group">
              <select
                style={{ height: "35px" }}
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
            <Form.Group className="mb-3">
              <Form.Label>Sub-Category Id</Form.Label>
              <Form.Control
                name="subCategoryId"
                type="text"
                value={subCategoryId}
                isInvalid={!!errors.subCategoryId}
                onChange={() => {}}
                disabled
              />
              <Form.Control.Feedback type="invalid">
                {errors.subCategoryId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label>Sub-Category</Form.Label>
              <Form.Control
                type="text"
                name="subCategoryName"
                onChange={(e) => setSubCategoryName(e.target.value)}
                value={subCategoryName}
                isInvalid={!!errors.subCategoryName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.subCategoryName}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "rgba(121,104,91,1)",
                border: "rgba(121,104,91,1)",
              }}
            >
              Add Sub-category
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddSubcat;
