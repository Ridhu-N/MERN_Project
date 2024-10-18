import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
function BasicEg() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light">WATCHES</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Home Page</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BasicEg;
