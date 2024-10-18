import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="shadow"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Container className="py-5">
        <Row>
          <Col md={3}>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="https://mvmtsports.com/wp-content/uploads/2021/11/MVMT-Master-Logo-2020-Deep-Grey-Small.png"
                width="100px"
              />
              <span className="ml-3 h5 font-weight-bold">
                <img
                  src="https://media.glassdoor.com/sqll/1147599/mvmt-watches-squarelogo-1514312397407.png"
                  alt="sym"
                  width="25px"
                  style={{ paddingTop: "10px" }}
                ></img>
              </span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              support@mvmt.com
            </p>
            <p>
              <Icon.Facebook /> <Icon.Instagram /> <Icon.Youtube />{" "}
              <Icon.Twitter />
            </p>
          </Col>
          <Col md={3}>
            <Link to="/prodes"  style={{ color: "black",textDecoration:'none' }} >
              <h5 className="mb-4 font-weight-bold" style={{ color: "black" }}>SHOP MVMT</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" style={{ color: "black",textDecoration:'none' }}>
                    SHOP WATCHES
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black",textDecoration:'none'  }}>
                    SHOP EYEWEAR
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black",textDecoration:'none'  }}>
                    SHOP JEWELRY
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black",textDecoration:'none'  }}>
                    SHOP INSTA
                  </a>
                </li>
              </ul>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/prodes"  style={{ color: "black",textDecoration:'none' }}>
              <h5 className="mb-4 font-weight-bold" style={{ color: "black",textDecoration:'none' }}>CUSTOMER SERVICE</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" style={{ color: "black" , textDecoration:'none' }}>
                    ACCESSIBILITY
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black" ,textDecoration:'none' }}>
                    MY ACCOUNT
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black" ,textDecoration:'none' }}>
                    CONTACT US
                  </a>
                </li>
              </ul>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/prodes"  style={{ color: "black",textDecoration:'none' }}>
              <h5 className="mb-4 font-weight-bold" style={{ color: "black",textDecoration:'none'  }}>#JOINTHEMVMT</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" style={{ color: "black" ,textDecoration:'none' }}>
                    OUR STORY
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "black" ,textDecoration:'none' }}>
                    OUR BLOG
                  </a>
                </li>
              </ul>
            </Link>
          </Col>
        </Row>
        <div className="text-center mt-5">
          &copy; MVMT, 2020. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
