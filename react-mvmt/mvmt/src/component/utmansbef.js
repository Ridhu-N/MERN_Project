// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Table from "react-bootstrap/Table";
// import { PencilSquare } from "react-bootstrap-icons";
// import { Trash3Fill } from "react-bootstrap-icons";
// import { useState, useEffect } from "react";
// import  Modal  from "react-bootstrap/Modal";
// import { ArrowLeft } from "react-bootstrap-icons";
// import axios from "axios";
// function UtmanSbef() {
//   const [subCategories, setSubCategories] = useState([]);
//   const [editSubcatId, setSubcatId] = useState("");
//   const [editSubName, seteditSubName] = useState("");
//   const[showEditModal,setShowEditModal]=useState(false)
//   useEffect(() => {
//     fetchSubCategories();
//   }, []);

//   const fetchSubCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/getsubcat");
//       setSubCategories(response.data);
//       console.log(subCategories);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteSubCategory = async (subcategoryId) => {
//     try {
//       const confirmed = window.confirm("Are you sure you want to delete this subcategory?");
//       if(confirmed){
//       await axios.delete(`http://localhost:5000/delsubcat/${subcategoryId}`);
//       fetchSubCategories(); // Fetch the updated list of categories after deletion
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEdit = async (id) => {
//     const response1 = await axios.get(
//       `http://localhost:5000/subcatfetch/${id}`
//     );
//     const data = response1.data;
//     setSubcatId(data[0].subcategoryId);
//     seteditSubName(data[0].subcategoryname);
//     setShowEditModal(true);
//   };
//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/subcatput/${editSubcatId}`,
//         { name: editSubName }
//       );

//       if (response.data === "success") {
//         setShowEditModal(false);
//         fetchSubCategories();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setShowEditModal(false);
//   };
//   return (
//     <div
//       className="container-fluid"
//       style={{ backgroundColor: "rgba(242,235,229,1)" }}
//     >
//       <Link to ="/utbef"><ArrowLeft style={{color:'white',backgroundColor:"rgba(121,104,91)",width:'50px',height:'30px',fontSize:'10px'}}/></Link>
//       <div className="row">
//         <h4 style={{ display: "flex", justifyContent: "center" }}>
//           Sub-Category
//         </h4>
//         <Link to="/addsubcat">
//           <Button
//             style={{
//               backgroundColor: "rgba(121,104,91,1)",
//               width: "200px",
//               height: "40px",
//               marginBottom: "20px",
//             }}
//           >
//             Add Sub-category
//           </Button>
//         </Link>
//         <div className="col d-flex justify-content-center">
//           <Table>
//             <thead style={{ backgroundColor: "rgba(121,104,91,1)" }}>
//               <tr>
//                 <th style={{ color: "white" }}>S.No</th>
//                 <th style={{ color: "white" }}>Category</th>
//                 <th style={{ color: "white" }}>Sub-Category Id</th>
//                 <th style={{color: "white"}}>Sub-Category</th>
//                 <th style={{ color: "white" }}>Action</th>
//                 <th style={{ color: "white" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {subCategories.map((subcategory, index) => (
//                 <tr key={subcategory.categoryId}>
//                   <td>{index + 1}</td>
//                   <td>{subcategory.categoryName}</td>
//                   <td>{subcategory.subcategoryId}</td>
//                   <td>{subcategory.subcategory}</td>
//                   <td>
//                     <Link
//                       to={{ state: { subcategory } }}
//                       style={{ color: "black" }}
//                       onClick={() => handleEdit(subcategory.subcategoryId)}
//                     >
//                       <PencilSquare />
//                     </Link>
//                   </td>
//                   <td>
//                     <Trash3Fill
//                       onClick={() =>
//                         deleteSubCategory(subcategory.subcategoryId)
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//             <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Edit SubCategory</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <label className="p-2">
//                   SubCategory Name{" "}
//                   <input
//                     type="text"
//                     value={editSubName}
//                     onChange={(e) => seteditSubName(e.target.value)}
//                   />
//                 </label>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button
//                   variant="secondary"
//                   onClick={() => setShowEditModal(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button variant="primary" onClick={handleUpdate}>
//                   Update
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </Table>
//         </div>

//         <div className="container-fluid" style={{ height: "350px" }}></div>
//       </div>
//     </div>
//   );
// }
// export default UtmanSbef;



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { PencilSquare } from "react-bootstrap-icons";
import { Trash3Fill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import axios from "axios";

function UtmanSbef() {
  const [subCategories, setSubCategories] = useState([]);
  const [editSubcatId, setSubcatId] = useState("");
  const [editSubName, setEditSubName] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchSubCategories();
    fetchCategories();
  }, []);

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getsubcat");
      setSubCategories(response.data);
      console.log(subCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getcat");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubCategory = async (subcategoryId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this subcategory?"
      );
      if (confirmed) {
        await axios.delete(`http://localhost:5000/delsubcat/${subcategoryId}`);
        fetchSubCategories(); // Fetch the updated list of categories after deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    const response1 = await axios.get(
      `http://localhost:5000/subcatfetch/${id}`
    );
    const data = response1.data;
    setSubcatId(data[0].subcategoryId);
    setEditSubName(data[0].subcategoryname);
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/subcatput/${editSubcatId}`,
        { name: editSubName }
      );

      if (response.data === "success") {
        setShowEditModal(false);
        fetchSubCategories();
      }
    } catch (error) {
      console.log(error);
    }
    setShowEditModal(false);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(242,235,229,1)" }}
    >
      <Link to="/utbef">
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
      <div className="row">
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          Sub-Category
        </h4>
        <Link to="/addsubcat">
          <Button
            style={{
              backgroundColor: "rgba(121,104,91,1)",
              width: "200px",
              height: "40px",
              marginBottom: "20px",
            }}
          >
            Add Sub-category
          </Button>
        </Link>
        <div className="col d-flex justify-content-center">
          <Table>
            <thead style={{ backgroundColor: "rgba(121,104,91,1)" }}>
              <tr>
                <th style={{ color: "white" }}>S.No</th>
                <th style={{ color: "white" }}>Category</th>
                <th style={{ color: "white" }}>Sub-Category Id</th>
                <th style={{ color: "white" }}>Sub-Category</th>
                <th style={{ color: "white" }}>Action</th>
                <th style={{ color: "white" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {subCategories.map((subcategory, index) => (
                <tr key={subcategory.subcategoryId}>
                  <td>{index + 1}</td>
                  <td>
                    {categories.map((category) =>
                      category.categoryId === subcategory.categoryId
                        ? category.categoryName
                        : null
                    )}
                  </td>
                  <td>{subcategory.subcategoryId}</td>
                  <td>{subcategory.subcategoryname}</td>
                  <td>
                    <Link
                      to={{ state: { subcategory } }}
                      style={{ color: "black" }}
                      onClick={() => handleEdit(subcategory.subcategoryId)}
                    >
                      <PencilSquare />
                    </Link>
                  </td>
                  <td>
                    <Trash3Fill
                      onClick={() =>
                        deleteSubCategory(subcategory.subcategoryId)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit SubCategory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label className="p-2">
                SubCategory Name{" "}
                <input
                  type="text"
                  value={editSubName}
                  onChange={(e) => setEditSubName(e.target.value)}
                />
              </label>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleUpdate}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="container-fluid" style={{ height: "350px" }}></div>
      </div>
    </div>
  );
}

export default UtmanSbef;
