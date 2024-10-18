import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export function Payment() {
  const [email, setemail] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [nameoncard, setNameoncard] = useState("");
  const [expdate, setExpdate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cartData, setCartData] = useState([]);
  let subtotal = 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/savePaymentDetails",
        {
          email,
          cardnumber,
          nameoncard,
          expdate,
          securityCode,
        }
      );

      if (response.data === "success") {
        // Handle success scenario
        console.log("Card details saved successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="row pt-2" style={{ width: "620px" }}>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="email"
                    name="email"
                    placeholder=""
                    style={{ borderColor: "#C4C4C4" }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div className="row pt-2" style={{ width: "620px" }}>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="cardnumber"
                    name="cardnumber"
                    placeholder=""
                    style={{ borderColor: "#C4C4C4" }}
                    value={cardnumber}
                    onChange={(e) => setCardnumber(e.target.value)}
                  />
                  <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                    Card Number
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZmPWLy1vDBBhO1oXtpvowq4FFoTD5RpaKXH8_1I77pcgF_2xK7T954IRqvl19_lR4w&usqp=CAU"
                      alt="Card Logo"
                      style={{
                        width: "80px",
                        justifyContent: "end",
                        paddingLeft: "20px",
                      }}
                    ></img>
                  </label>
                </div>
              </div>
            </div>
            <div className="row pt-2" style={{ width: "620px" }}>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="nameoncard"
                    name="nameoncard"
                    placeholder=""
                    style={{ borderColor: "#C4C4C4" }}
                    value={nameoncard}
                    onChange={(e) => setNameoncard(e.target.value)}
                  />
                  <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                    Name on card
                  </label>
                </div>
              </div>
            </div>
            <div className="row" style={{ width: "620px" }}>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="expdate"
                    name="expdate"
                    placeholder=""
                    style={{ borderColor: "#C4C4C4" }}
                    value={expdate}
                    onChange={(e) => setExpdate(e.target.value)}
                  />
                  <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                    Expiration Date
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="securitycode"
                    name="securitycode"
                    placeholder=""
                    style={{ borderColor: "#C4C4C4" }}
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                  />
                  <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                    Security Code
                  </label>
                </div>
              </div>
            </div>

            <div className="col-5">
              <Link to="/thankyou">
                <Button
                  variant="dark"
                  className=" justify-content-center"
                  type="submit"
                >
                  Confirm Payment
                </Button>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Order Details</h2>
              <hr />

              <div className="col">
                <div className="row">
                  <div className="col-6">
                    {cartData.map((item) => (
                      <div className="row">
                        <div className="col-6">
                          <img
                            src={item.proimg}
                            style={{ width: "100px", height: "100px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-6">
                    {cartData.map((item) => {
                      subtotal += parseInt(item.prize);
                      return (
                        <div key={item.id}>
                          <h6>{item.pname}</h6>
                          <p>{item.color}</p>
                          <div key={item.id}>
                            <h6>₹{item.prize}</h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="row">
                  <hr></hr>
                  <div className="col-6">
                    <h6>Total</h6>
                  </div>
                  <div className="col-6">
                    <h6> ₹{subtotal}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
