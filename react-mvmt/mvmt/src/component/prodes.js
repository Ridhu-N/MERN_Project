// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import {
//   CheckSquare,
//   CheckSquareFill,
//   StarFill,
//   StarHalf,
// } from "react-bootstrap-icons";
// function Prodes() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-7" style={{ border: "1px solid red" }}>
//           <div className="row">
//             <div className="col-1"></div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc31c0a1d/images/products/FC01-TIRG_fr.jpg"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwe9279596/images/products/FC01-TIRG_b.jpg"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-1"></div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw9e1f8454/images/products/FC01-TIRG_l_1.jpg"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw588e350b/images/products/FC01-TIRG_l_4.jpg"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-1"></div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwb6aac0dd/images/products/FC01-TIRG_l_2.jpg"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//             <div className="col-5">
//               <img
//                 src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw797a0ba2/images/products/FC01-TIRG_l_3.jpg?sw=453&sh=453"
//                 alt="img1"
//                 style={{ width: "100%" }}
//               ></img>
//             </div>
//           </div>
//         </div>
//         <div className="col-5">
//           <div className="row">
//             <div className="col p-3">
//               <h4>NOVA</h4>
//               <p style={{ color: "grey" }}>ORION ROSE | 38MM</p>
//               <p>Tax & duties included</p>
//               <StarFill />
//               <StarFill />
//               <StarFill />
//               <StarFill />
//               <StarHalf /> <u>1294 REVIEWS</u>
//               <button className="btn btn-success w-100 " >ADD TO CART</button>

//               <CheckSquare />
//               Add gift box $16
//             </div>
//             <div className="col p-3">
//               <div className="col">
//                 <h4>L25,702.00</h4>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col p-3">
//               <h6>DESCRIPTION</h6>
//               <p>
//                 Glamorous rose gold meets bold titanium, a cosmic pairing. The
//                 38mm Orion Rose channels an awe for the celestial with a
//                 future-forward design sensibility and dual timezone
//                 functionality.
//               </p>
//               <h6>SHIPPING & RETURNS</h6>
//               <p>
//                 Free shipping over $50 USD & easy returns.<br></br>
//                  Standard - $6.95 -
//                 5-7 Business Days 2 Day - $15 - 2 Business Days Next Day - $25 -
//                 1 Business Day
//               </p>
//               <div className="row">
//                 <div className="col-6">
//                   <img src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw1c273d25/images/products/STRAP-FC-TARG_fr.jpg?sw=180&sh=180"></img>
//                   <p style={{ fontWeight: "bold" }}>Classic leather (pink)</p>
//                   <p
//                     style={{
//                       color: "grey",
//                       display: "flex",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     L4563,1
//                   </p>
//                 </div>
//                 <div className="col-6">
//                   <img src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw7e753338/images/products/28200239_fr.jpg?sw=180&sh=180"></img>
//                   <p style={{ fontWeight: "bold" }}>Stone Bead Bracelets</p>
//                   <p
//                     style={{
//                       color: "grey",
//                       display: "flex",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     L72314
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Prodes;

import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function ProductDescription() {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("param1");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getproduct/${productId}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInsert = async () => {
    try {
      await axios.post("http://localhost:5000/addtocart", product);
      console.log("Product added to cart successfully!");
    } catch (error) {
      console.log(error);
    }
    window.location.href='/'
  };

  return (
    <div>
      {product ? (
        <div>
          <div className="row">
            <div className="col">
              <img
                src={product.proimg}
                style={{ height: "400px", width: "400px" }}
              />
            </div>
            <div className="col-6">
              {/* <h2>Product ID: {product.pid}</h2> */}
              <h4 style={{paddingTop:"20px"}}>{product.pname}</h4>
              <h5 style={{color:'gray',paddingTop:"10px"}}>{product.color}</h5>
              <h5>₹{product.prize}</h5>
              <p>{product.dessm}</p>
              <h4>Collection</h4>
              <h6>{product.collection}</h6>
              <h6>{product.style}</h6>
              <Button onClick={() => handleInsert()} variant="dark" className="w-20">Add to Cart</Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDescription;
