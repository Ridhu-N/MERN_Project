import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Admanage() {
  const nav = useNavigate();
  const [Admin, setAdmin] = useState(localStorage.getItem("admin"));
  useEffect(() => {
    if (Admin === null) {
      nav("/adlogin");
    }
  }, [Admin, nav]);
  const handlelogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/adlogin";
  };
  return (
    <div
      style={{ display: "flex", height: "150vh", overflow: "scroll initial" }}
    >
      <Nav
        defaultActiveKey="/"
        className="flex-column text-white"
        style={{
          backgroundColor: "rgba(121,104,91,1)",
          border: "rgba(121,104,91,1)",
          color: "white",
          width: "150px",
        }}
      >
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          <img
            src="https://img.freepik.com/free-vector/illustration-customer-service-concept_53876-5882.jpg"
            alt="backgrnd"
            style={{ borderRadius: "50%", height: "60px" }}
          ></img>
          <p
            style={{
              fontStyle: "oblique",
              fontWeight: "normal",
              marginBottom: "0px",
            }}
          >
            Ridhu Varshini
          </p>
          <p style={{ fontStyle: "oblique", fontWeight: "normal" }}>Admin</p>
        </div>

        <Nav.Item>
          <Link
            to="/adminmanage"
            style={{
              color: "white",
              textDecoration: "none",
              paddingLeft: "35px",
            }}
          >
            Dashboard
          </Link>
        </Nav.Item>

        <Nav.Item
          style={{
            color: "white",
            textDecoration: "none",
            paddingLeft: "35px",
          }}
          onClick={handlelogout}
        >
          Logout
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Admanage;
