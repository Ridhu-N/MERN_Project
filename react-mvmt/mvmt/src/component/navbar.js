import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function BasicExample() {
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [subCategorySelect, setSubCategorySelect] = useState();
  let SessionName = localStorage.getItem("username");
  let productimg = localStorage.getItem("image");
  console.log(productimg);
  let productname = localStorage.getItem("productName");
  let productPrice = localStorage.getItem("price");
  productPrice = productPrice ? parseFloat(productPrice) : 0;
  const [amount, setAmount] = useState(productPrice * count);
  localStorage.setItem("bill", amount.toString());
  const [cartData, setCartData] = useState([]);

  // let price = localStorage.getItem("price");
  let color = localStorage.getItem("color");
  let subtotal = 0;
  console.log(amount);

  useEffect(() => {
    if (productPrice) {
      setAmount(parseFloat(productPrice));
    }
  }, [productPrice]);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setAmount(productPrice * (count - 1));
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
    setAmount(productPrice * (count + 1));
  };

  const nav = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      nav("/");
    }
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart");
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  // const handleCountChange = async (itemId, newCount) => {
  //   if (newCount >= 1) {
  //     const updatedCartData = cartData.map((item) => {
  //       if (item.id === itemId) {
  //         const newAmount = item.productPrice * newCount;
  //         // Update the amount in the database using an API request
  //         updateCartItemAmountInDatabase(itemId, newAmount);
  //         return { ...item, count: newCount, amount: newAmount };
  //       }
  //       return item;
  //     });

  //     setCartData(updatedCartData);
  //   }
  // };

  // Function to update the amount of a cart item in the database
  const updateCartItemAmountInDatabase = async (itemId, newAmount) => {
    try {
      // Make an API request to update the amount in the database
      console.log(itemId, "itemid from");
      await axios.put(`http://localhost:5000/updatecart/${itemId}`, {
        amount: newAmount,
      });
    } catch (error) {
      console.error("Error updating cart item amount:", error);
    }
  };

  const handleProductRemove = async (itemId) => {
    try {
      console.log(itemId);
      await axios.delete(`http://localhost:5000/cart/${itemId}`);

      const updatedCartData = cartData.filter((item) => item.id !== itemId);
      setCartData(updatedCartData);
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
    window.location.href = "/";
  };

  const handleLogout = () => {
    // Perform logout actions here
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    // Additional logout actions can be added if necessary
  };
  // const handleproductminus = () => {
  //   if (count === 1) {
  //     localStorage.removeItem("pname");
  //     localStorage.removeItem("color");
  //     localStorage.removeItem("prize");
  //   } else {
  //     setCount(count - 1);
  //     setAmount((count - 1) * amount);
  //   }
  // };

  // const handleMinus = (itemId) => {
  //   const updatedCartData = cartData.map((item) => {
  //     if (item.id === itemId) {
  //       const newCount = Math.max(item.count - 1, 1); // Ensure count is at least 1
  //       const newAmount = productPrice * newCount;
  //       updateCartItemAmountInDatabase(itemId, newAmount);
  //       return {
  //         ...item,
  //         count: newCount,
  //         amount: newAmount,
  //       };
  //     }
  //     return item;
  //   });

  //   setCartData(updatedCartData);
  // };

  // const handlePlus = (itemId) => {
  //   const updatedCartData = cartData.map((item) => {
  //     if (item.id === itemId) {
  //       const newCount = item.count + 1;
  //       const newAmount = productPrice * newCount;
  //       updateCartItemAmountInDatabase(itemId, newAmount);
  //       return {
  //         ...item,
  //         count: newCount,
  //         amount: newAmount,
  //       };
  //     }
  //     return item;
  //   });

  // setCartData(updatedCartData);
  // };
  return (
    <Navbar bg="light" expand="lg" className="p-0">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <img
              src="https://mvmtsports.com/wp-content/uploads/2021/11/MVMT-Master-Logo-2020-Deep-Grey-Small.png"
              alt="logo"
              style={{ width: "40%" }}
            ></img>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Watches" id="basic-nav-dropdown">
              {/* <Link to="/productlist" style={{ textDecoration: "none" }}> */}
              <Link
                to={`/productlist/${"Mens Watch"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  onClick={() => setSubCategorySelect("Mens Watch")}
                  href="#action/3.3"
                >
                  Mens Watch
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Womens Watch"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  onClick={() => setSubCategorySelect("Womens Watch")}
                  href="#action/3.3"
                >
                  Womens Watch
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Strap Guide"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => setSubCategorySelect("Strap Guide")}
                >
                  Strap Guide
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Special Edition"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setSubCategorySelect("Special Edition")}
                >
                  Special Edition
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Sale"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setSubCategorySelect("Sale")}
                >
                  Sale
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Eyewear" id="basic-nav-dropdown">
              <Link
                to={`/productlist/${"Mens sunglasses"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setSubCategorySelect("Mens sunglasses")}
                >
                  Mens Glasses
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Womens sunglasses"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => setSubCategorySelect("Womens sunglasses")}
                >
                  Womens Glasses
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Blue Light Glasses"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => setSubCategorySelect("Blue Light Glasses")}
                >
                  Blue Light Glasses
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Special Edition"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setSubCategorySelect("Special Edition")}
                >
                  Special Edition
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Jewelry" id="basic-nav-dropdown">
              <Link
                to={`/productlist/${"Mens Jewelry"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setSubCategorySelect("Mens Jewelry")}
                >
                  Mens Jewelry
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Womens Jewelry"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setSubCategorySelect("Womens Jewelry")}
                >
                  Womens Jewelry
                </NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Special Edition"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Special Edition</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Sale" id="basic-nav-dropdown">
              <Link
                to={`/productlist/${"Sale Watches"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Sale Watches</NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Sale Eyewear"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Sale Eyewear</NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Sale Jewelry"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Sale Jewelry</NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Sale Essential"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Sale Essential</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Gifting" id="basic-nav-dropdown">
              <Link
                to={`/productlist/${"Gift by occassion"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Gift by occassion</NavDropdown.Item>
              </Link>
              <Link
                to={`/productlist/${"Gift Boxese"}`}
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item>Gift Boxes</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/productlist" style={{ textDecoration: "none" }}>
          <Navbar.Brand
            style={{ paddingLeft: "200px", textDecoration: "none" }}
          >
            <Icon.Search></Icon.Search>
          </Navbar.Brand>
        </Link>

        <Navbar.Brand href="/">
          <Icon.ThreeDotsVertical />
        </Navbar.Brand>
        <Navbar.Brand>
          {/* <Link to='/cart' style={{color:'black',textDecoration:'none'}}>  */}
          <Icon.Bag onClick={() => setShowModal(true)} />
          {/* </Link>  */}
        </Navbar.Brand>
        <Navbar.Brand>
          <Link
            to="/adlogin"
            style={{ color: "black", textDecoration: "none" }}
          >
            <Icon.PersonCheck />
          </Link>
        </Navbar.Brand>
        {SessionName ? (
          <NavDropdown
            title={localStorage.getItem("username")}
            id="basic-nav-dropdown"
          >
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            </Link>
            <Link to="/prodes" style={{ textDecoration: "none" }}>
              <NavDropdown.Item href="#action/3.1" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
        ) : (
          <Navbar.Brand>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Icon.Person />
            </Link>
          </Navbar.Brand>
        )}
      </Container>
      {SessionName ? (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            right: 20,
            transform: "translate(30%, 0%)",
          }}
        >
          <Modal.Header style={{ fontWeight: "bold", fontSize: "large" }}>
            Cart
          </Modal.Header>
          <Modal.Body>
            {cartData.map((item) => {
              subtotal += parseInt(item.prize) * item.count;
              return (
                <div className="row">
                  <div className="col-6">
                    <img
                      src={item.proimg}
                      style={{ height: "200px", weight: "200px" }}
                    />
                  </div>
                  <div className="col-6">
                    <div key={item.id}>
                      <h6>{item.pname}</h6>
                      <p>{item.color}</p>
                      <div>
                        <DashCircle
                          onClick={() => handleMinus(item.id)}
                        ></DashCircle>
                        {count}
                        <PlusCircle onClick={() => handlePlus(item.id)}>
                          +
                        </PlusCircle>
                      </div>
                      <p>₹{item.prize*count}</p>
                      <Button
                        variant="dark"
                        onClick={() => handleProductRemove(item.pid)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Link to="/checkout">
              <Button variant="dark" style={{ marginLeft: "20px" }}>
                CheckOut
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            right: 20,
            transform: "translate(30%, 0%)",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> cart is empty</p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/checkout">
              <Button>CheckOut</Button>
            </Link>
            <Button onClick={() => setShowModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Navbar>
  );
}

export default BasicExample;
