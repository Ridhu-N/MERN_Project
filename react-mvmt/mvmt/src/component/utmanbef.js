import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft, PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button';
function Utmanbef() {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getcat");
      setCategories(response.data);
      // console.log(categories);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this category?"
      );
      if (confirmed) {
        await axios.delete(`http://localhost:5000/delcat/${categoryId}`);
        fetchCategories(); // Fetch the updated list of categories after deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    const response1 = await axios.get(`http://localhost:5000/catfetch/${id}`);
    const data = response1.data;
    console.log(data);
    setEditId(data[0].categoryId);
    setEditName(data[0].categoryName);
    setShowEditModal(true);
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/catput/${editId}`,
        { name: editName }
      );
      if (response.data === "success") {
        fetchCategories();
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
      </Link>{" "}
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Category
      </h4>
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <Link to="/addcat">
            <Button
              style={{
                backgroundColor: "rgba(121,104,91,1)",
                width: "150px",
                height: "40px",
                marginBottom: "20px",
              }}
            >
              Add category
            </Button>
          </Link>
          <Table>
            <thead style={{ backgroundColor: "rgba(121,104,91,1)" }}>
              <tr>
                <th style={{ color: "white" }}>S.No</th>
                <th style={{ color: "white" }}>Category Id</th>
                <th style={{ color: "white" }}>Category</th>
                <th style={{ color: "white" }}>Edit</th>
                <th style={{ color: "white" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.categoryId}>
                  <td>{index + 1}</td>
                  <td>{category.categoryId}</td>
                  <td>{category.categoryName}</td>
                  <td>
                    <Link
                      to={{ state: { category } }}
                      style={{ color: "black" }}
                      onClick={() => handleEdit(category.categoryId)}
                    >
                      <PencilSquare />
                    </Link>
                  </td>
                  <td>
                    <Trash3Fill
                      onClick={() => deleteCategory(category.categoryId)}
                    />
                  </td>
                </tr>
              ))}
              <Modal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label className="p-2">
                    Category Name{" "}
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
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
            </tbody>
          </Table>
        </div>
      </div>
      <div className="container-fluid" style={{ height: "310px" }} />
    </div>
  );
}

export default Utmanbef;
