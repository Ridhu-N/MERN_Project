// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Row, Col } from "react-bootstrap";
// import { InputGroup } from "react-bootstrap";
// import { Button } from "react-bootstrap";

// import axios from "axios";
// // import { Button } from "react-bootstrap/lib/inputgroup";

// function ProductList() {
//   const [productfetch, setProductFetch] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const addToCart = (product) => {
//     const updatedCartItems = [...cartItems, product];
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//     console.log(updatedCartItems);
//   };
//   const saveProductDetail = () => {
//     localStorage.setItem("productName", "NOVA");
//     localStorage.setItem("price", 10000);
//     localStorage.setItem(
//       "productDescription",
//       "Glamorous rose gold meets bold titanium, a cosmic pairing. The 38mm Orion Rose channels an awe for the celestial with a future-forward design sensibility and dual timezone functionality."
//     );
//     localStorage.setItem(
//       "image",
//       "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc31c0a1d/images/products/FC01-TIRG_fr.jpg"
//     );
//     localStorage.setItem("color", "ORION ROSE | 38MM");
//   };
//   const image = [
//     "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F0d5dc9afc6f04e03b6eb92fec19cf9e4?format=webp",
//   ];
//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/fetchpro");
//       console.log(response.data); // Check the response data in the console
//       setProductFetch(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Card>
//         <Card.Body>
//           <Row>
//             {productfetch.map((product, index) => (
//               <Col md={3} key={index} style={{paddingTop:'30px'}}>
//                 <img src={product.proimg} style={{height:'300px',width:'300px'}} />
//                 <Row>
//                   <Col md={12} className="d-flex justify-content-center">
//                     <Card.Title>{product.pname}</Card.Title>
//                   </Col>
//                   <Col
//                     md={12}
//                     className="d-flex justify-content-center"
//                     style={{ color: "grey" }}
//                   >
//                     <Card.Text>{product.color}</Card.Text>
//                   </Col>
//                   <Col md={12} className="d-flex justify-content-center">
//                     <Card.Text>₹{product.prize}</Card.Text>
//                   </Col>
//                 </Row>
//                 {/* <Button
//                   className="w-100"
//                   style={{ backgroundColor: "rgba(121,104,91)" }}
//                   onClick={saveProductDetail}
//                 >
//                   Add to Cart
//                 </Button> */}
//               </Col>
//             ))}
//           </Row>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ProductList;
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductList() {
  const [productfetch, setProductFetch] = useState([]);
  const {subCategory}  = useParams();
  console.log(subCategory);
  const nav = useNavigate();
 console.log("sub------")
  useEffect(() => {
    fetchProduct();
  }, [subCategory]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/fetchproduct/${subCategory}`
      );
      setProductFetch(response.data);
    } catch (err) {
      console.log(err);
      // Handle the error appropriately (e.g., display error message)
    }
  };
  
  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            {productfetch.map((product, index) => (
              <Col md={3} key={index} style={{ paddingTop: "30px" }}>
                <Link
                  to={{
                    pathname: "/prodes",
                    search: `?param1=${product.pid}`,
                  }}
                >
                  <img
                    src={product.proimg}
                    style={{ height: "300px", width: "300px" }}
                    alt={product.pname}
                  />
                </Link>
                <Row>
                  <Col md={12} className="d-flex justify-content-center">
                    <Card.Title>{product.pname}</Card.Title>
                  </Col>
                  <Col
                    md={12}
                    className="d-flex justify-content-center"
                    style={{ color: "grey" }}
                  >
                    <Card.Text>{product.color}</Card.Text>
                  </Col>
                  <Col md={12} className="d-flex justify-content-center">
                    <Card.Text>₹{product.prize}</Card.Text>
                  </Col>

                </Row>
              </Col>
              
            ))}
          </Row>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default ProductList;
