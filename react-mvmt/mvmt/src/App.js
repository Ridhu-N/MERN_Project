import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import ConBody from "./conbody";
import Login from "./component/login";
// import Signup from "./component/regis";
import Admin from "./component/adminfrm";
import BasicExample from "./component/navbar";
import AdLogin from "./component/adlogin";
import AdminManage from "./component/management";
import Footer from "./component/foot";
import Signup from "./component/regis";
import Proman from "./component/proman";
import Utman from "./component/utman";
import Table from "./component/Table";
import Admanage from "./component/admanage";
import Prodes from "./component/prodes";
import Utmanfrm from "./component/utmanfrm";
import Cart from "./cart";
import Utbef from "./component/utbef";
import Utmanbef from "./component/utmanbef";
import UtmanSbef from "./component/utmansbef";
import Addcat from "./component/addcat";
import AddSubcat from "./component/addsubcat";
import Addproduct from "./component/addproduct";
import Utmancat from "./component/utmancat";
import Checkout from "./component/checkout";
import CheckOrd from "./component/checkord";
import Beforecheckout from "./component/beforecheckout";
import { Payment } from "./component/payment";
import ProductList from "./component/productList";
import OrderDetails from "./component/ordersummary";
import Thankyou from "./component/thankyou";
import ProductAll from "./component/productall";
import Profile from "./component/profile";
function App() {
  const [orderData, setOrderData] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <BasicExample />
                <ConBody />
                <Footer />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <BasicExample />
                <Login />
                <Footer />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                <BasicExample />
                <Signup />
                <Footer />
              </div>
            }
          />
          <Route path="/adlogin" element={<AdLogin />} />
          <Route path="/addpro" element={<Admin />} />
          <Route path="/proman" element={<Proman />} />
          <Route path="/adminmanage" element={<AdminManage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/utmancat" element={<Utmancat />} />
          <Route
            path="/checkout"
            element={
              <div>
                <BasicExample />
                <Checkout />
                <Footer />
              </div>
            }
          />
          <Route path="/checkord" element={<CheckOrd />} />
          <Route path="/befcheckout" element={<Beforecheckout />} />
          <Route
            path="/payment"
            element={
              <div>
                <BasicExample />
                <Payment />
                <Footer />
              </div>
            }
          />
          <Route
            path="/prodes"
            element={
              <div>
                <BasicExample />
                <Prodes />
                <Footer />
              </div>
            }
          />
          <Route path="/thankyou" element={
            <div>
              <BasicExample/>
              <Thankyou/>
              <Footer/>
            </div>
          }/>
          <Route path="/utman" element={<Utman />} />
          <Route path="/utmanfrm" element={<Utmanfrm />} />
          <Route
            path="/cart"
            element={
              <div>
                <BasicExample />
                <Cart />
                <Footer />
              </div>
            }
          />
          <Route path="/utbef" element={<Utbef />} />{" "}
          <Route path="/utmanbef" element={<Utmanbef />} />
          <Route path="/utmansbef" element={<UtmanSbef />} />
          <Route path="/utmansbef/:id" element={<UtmanSbef />} />
          <Route path="/addcat" element={<Addcat />} />
          <Route path="/addsubcat" element={<AddSubcat />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/productall" element={<div><BasicExample/><ProductAll/><Footer/></div>}/>
          <Route
            path="/productlist/:subCategory"
            element={
              <div>
                <BasicExample />
                <ProductList />
                <Footer />
              </div>
            }
          />
          <Route path="/profile" element={<div><BasicExample/><Profile/><Footer/></div>}/>
        </Routes>
      </BrowserRouter>
      {/*       
       <BasicExample/>
      <ConBody/>  */}
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <Admin/>  */}
      {/* <AdLogin/> */}
      {/* <AdminManage/>  */}
      {/* <Footer/> */}
      {/* <Proman /> */}
      {/* <Table/> */}
      {/* <Prodes/> */}
    </div>
  );
}

export default App;
