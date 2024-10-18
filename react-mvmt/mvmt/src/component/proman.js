import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import {
  Download,
  Icon0Circle,
  PencilSquare,
  Trash3Fill,
} from "react-bootstrap-icons";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { ArrowLeft } from "react-bootstrap-icons";
import { useDownloadExcel } from "react-export-table-to-excel";
function Proman() {
  const [products, setProducts] = useState([]);
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [prize, setPrize] = useState("");
  const [stock, setStock] = useState("");
  const [deslg, setDeslg] = useState("");
  const [dessm, setDessm] = useState("");
  const [collection, setCollection] = useState("");
  const [strapmaterial, setStrapmaterial] = useState("");
  const [style, setStyle] = useState("");
  //   const [showEditModal, setShowEditModal] = useState(false);
  //   const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Tasksheet",
    sheet: "Users",
  });
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getproduct");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (pid) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (confirmed) {
        await axios.delete(`http://localhost:5000/delproduct/${pid}`);
        fetchProduct();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setPid(product.pid);
    setPname(product.pname);
    setColor(product.color);
    setGender(product.gender);
    setPrize(product.prize);
    setStock(product.stock);
    setDeslg(product.deslg);
    setDessm(product.dessm);
    setCollection(product.collection);
    setStrapmaterial(product.strapmaterial);
    setStyle(product.style);

    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/productput/${pid}`,
        {
          pname,
          color,
          gender,
          prize,
          stock,
          deslg,
          dessm,
          collection,
          strapmaterial,
          style,
        }
      );
      if (response.data === "success") {
        setShowEditModal(false);
        fetchProduct();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <Link to="/adminmanage">
        <ArrowLeft
          style={{
            backgroundColor: "rgba(121,104,91,1)",
            color: "white",
            fontSize: "30px",
          }}
        />
      </Link>
      <div className="row p-4">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/addproduct" style={{ textDecoration: "none" }}>
            <Button
              style={{
                display: "flex",
                backgroundColor: "rgba(121,104,91,1)",
                border: "rgba(121,104,91,1)",
              }}
            >
              ADD PRODUCT
            </Button>
          </Link>
        </div>
      </div>
      <div className="row p-4">
        <h3>
          <center>Product Management</center>
        </h3>
        <div className="col-12">
          <Button className="btn btn-dark m-2">
            <span className="px-1" onClick={onDownload}>
              <Download />
            </span>
            Download
          </Button>
          <Table ref={tableRef}>
            <thead>
              <tr>
                <th
                  style={{
                    color: "white",
                    backgroundColor: "rgba(121,104,91,1)",
                  }}
                >
                  Product ID
                </th>
                <th
                  style={{
                    color: "white",
                    backgroundColor: "rgba(121,104,91,1)",
                  }}
                >
                  Product Name
                </th>
                <th
                  style={{
                    color: "white",
                    backgroundColor: "rgba(121,104,91,1)",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.pid}>
                  <td>{product.pid}</td>
                  <td>{product.pname}</td>
                  <td>
                    <Link
                      to={{ state: { product } }}
                      style={{ color: "black" }}
                      onClick={() => handleEdit(product)}
                    >
                      <PencilSquare />
                    </Link>
                    <Trash3Fill onClick={() => deleteProduct(product.pid)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="pid">Product ID:</label>
              <input
                type="text"
                className="form-control"
                id="pid"
                value={pid}
                onChange={(e) => setPid(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pname">Product Name:</label>
              <input
                type="text"
                className="form-control"
                id="pname"
                value={pname}
                onChange={(e) => setPname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                className="form-control"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prize">Price:</label>
              <input
                type="text"
                className="form-control"
                id="prize"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="stock">Stock:</label>
              <input
                type="text"
                className="form-control"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="deslg">Description (Larger):</label>
              <input
                type="text"
                className="form-control"
                id="deslg"
                value={deslg}
                onChange={(e) => setDeslg(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dessm">Description (Small):</label>
              <input
                type="text"
                className="form-control"
                id="dessm"
                value={dessm}
                onChange={(e) => setDessm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="collection">Collection:</label>
              <input
                type="text"
                className="form-control"
                id="collection"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="strapmaterial">Strap Material:</label>
              <input
                type="text"
                className="form-control"
                id="strapmaterial"
                value={strapmaterial}
                onChange={(e) => setStrapmaterial(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="style">Style:</label>
              <input
                type="text"
                className="form-control"
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Proman;
