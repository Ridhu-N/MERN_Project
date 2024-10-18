const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MySQLStore = require("express-mysql-session")(session);
const cors = require("cors");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "movie_industry",
});
app.use(cors());

app.use(express.json());
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

const sessionStore = new MySQLStore({
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  connection: db,
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    store: sessionStore,
  })
);

// app.use((req, res, next) => {
//   if (req.session.customerId) {
//     const sql = "select pname from addproduct where pid=?";
//     db.query(sql, [req.session.customerId], (err, result) => {
//       if (err) throw err;
//       req.session.customerName = result[0].customerName;
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.post("/signup", (req, res) => {
  const sqlregis =
    "INSERT INTO regis (`fname`, `lname`, `phone`, `email`, `conemail`, `passcre`, `conpassword`,`add1`,`add2`,`postalcode`,`city`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.phone,
    req.body.email,
    req.body.conemail,
    req.body.passcre,
    req.body.conpassword,
    req.body.add1,
    req.body.add2,
    req.body.postalcode,
    req.body.city,
  ];
  // console.log(values);

  db.query(sqlregis, [values], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send("Success");
    }
  });
});

app.post("/login", (req, res) => {
  const sql = "select * from regis where `email`=? AND `passcre`=?";
  db.query(sql, [req.body.email, req.body.passcre], (err, data) => {
    // console.log(data);
    if (err) {
      return res.json("err");
    }
    if (data.length > 0) {
      console.log("Success");
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
  // const email = req.body.email;
  // const passcre = req.body.passcre;
  // db.query(
  //   "SELECT * FROM regis WHERE email=? AND passcre=?",
  //   [email, passcre],
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     if (result) {
  //       res.send(result);
  //     } else {
  //       res.send({ message: "Wrong email/password" });
  //     }
  //   }
  // );
});
app.post("/addcat", (req, res) => {
  const sqlcat = "INSERT INTO addcat (`categoryName`,`categoryId`) values(?)";
  const values = [req.body.categoryName, req.body.categoryId];
  // console.log(values);
  db.query(sqlcat, [values], (err, resultcat) => {
    res.send("success");
  });
});
app.get("/getcat", (req, res) => {
  const sql = "SELECT * FROM addcat";
  db.query(sql, (err, result) => {
    // console.log(result);
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
});

app.get("/getsubcat", (req, res) => {
  const sql = "SELECT * FROM addsubcat";
  db.query(sql, (err, result) => {
    console.log(result);
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
});

app.get("/getcustomer/:username", (req, res) => {
  // console.log(req.params.username);
  const sqlcus = "SELECT * FROM regis where email=?";
  db.query(sqlcus, [req.params.username], (err, result) => {
    console.log(result);
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
});

app.delete("/delcat/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const query = "DELETE FROM addcat WHERE categoryId = ?";

  db.query(query, [categoryId], (error, results) => {
    if (error) {
      console.error("Error deleting category from MySQL:", error);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.delete("/delsubcat/:subcategoryId", (req, res) => {
  const subcategoryId = req.params.subcategoryId;
  const query = "DELETE FROM addsubcat WHERE subcategoryId = ?";

  db.query(query, [subcategoryId], (error, results) => {
    if (error) {
      console.error("Error deleting subcategory from MySQL:", error);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.delete("/delproduct/:pid", (req, res) => {
  const productId = req.params.pid;
  const query = "DELETE FROM addproduct WHERE pid = ?";

  db.query(query, [productId], (error, results) => {
    if (error) {
      console.error("Error deleting product from MySQL:", error);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.post("/addsubcat", (req, res) => {
  const sqlsubcat =
    "INSERT INTO addsubcat (`categoryId`, `subcategoryId`, `subcategoryname` ) VALUES (?, ?, ?)";
  const values = [
    req.body.selectedCategory,
    req.body.subCategoryId,
    req.body.subCategoryName,
  ];

  db.query(sqlsubcat, values, (err, resultcat) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting data");
    } else {
      res.send("success");
    }
  });
});

app.get("/catfetch/:id", (req, res) => {
  const { id } = req.params;
  const sqleditcat = "select * from addcat where categoryId=?";
  db.query(sqleditcat, id, (err, result) => {
    // console.log(result);
    if (err) {
      return res.status(500).json({ message: "server failed to update" });
    }
    return res.json(result);
  });
});

app.get("/subcatfetch/:id", (req, res) => {
  const { id } = req.params;
  const sqleditsubcat = "select * from addsubcat where subcategoryId=?";
  db.query(sqleditsubcat, id, (err, result) => {
    // console.log(result);
    if (err) {
      return res.status(500).json({ message: "server failed to update" });
    }
    return res.json(result);
  });
});

app.get("/productfetch/:id", (req, res) => {
  const { id } = req.params;
  const sqleditpro = "select * from addproduct where pid=?";
  db.query(sqleditpro, id, (err, result) => {
    // console.log(result);
    if (err) {
      return res.status(500).json({ message: "server failed to update" });
    }
    return res.json(result);
  });
});

app.get("/fetchpro", (req, res) => {
  const sqlfetchpro = "select * from addproduct";
  db.query(sqlfetchpro, (err, result) => {
    if (err) {
      console.error(err); // Log the error to the console for debugging
      return res
        .status(500)
        .json({ message: "Failed to fetch data from the database" });
    }
    return res.json(result);
  });
});

app.get("/fetchproduct/:subCategory", (req, res) => {
  const { subCategory } = req.params;
  console.log({ subCategory });
  const sqlfetchpro = `SELECT * FROM addproduct WHERE subcategoryId = (SELECT subcategoryId FROM addsubcat WHERE subcategoryname = ?)`;
  db.query(sqlfetchpro, [subCategory], (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Failed to fetch data from the database" });
    }
    return res.json(result);
  });
});

app.get("/customerfetch/:cusemail", (req, res) => {
  const { cusemail } = req.params;
  console.log("inget", cusemail);
  const sqleditcus = `select * from regis where email=?;`;
  db.query(sqleditcus, [cusemail], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "server failed" });
    }

    return res.json(result);
  });
});

app.get("/username", (req, res) => {
  const sqluser =
    "select customerName from regis where email =?  AND passcre=? ";
  db.query(sqluser, []);
});

app.put("/catput/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sqlputcat = "Update addcat set categoryName =? where categoryId = ? ";
  db.query(sqlputcat, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server failed to do the task" });
    }
    res.send(result);
  });
});

app.put("/subcatput/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sqlputsubcat =
    "Update addsubcat set subcategoryname =? where subcategoryId = ? ";
  db.query(sqlputsubcat, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server failed to do the task" });
    }
    res.send(result);
  });
});

app.put("/productput/:id", (req, res) => {
  const { id } = req.params;
  const {
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
  } = req.body;

  const sqlproductput =
    "UPDATE addproduct SET pname = ?, color = ?, gender = ?, prize = ?, stock = ?, deslg = ?, dessm = ?, collection = ?, strapmaterial = ?, style = ? WHERE pid = ?;";

  const values = [
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
    id,
  ];

  db.query(sqlproductput, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server failed to do the task" });
    }
    res.send(result);
  });
});

app.put("/cusput/:cusemail", (req, res) => {
  const { cusemail } = req.params;
  const { fname, lname, add1, add2, postalcode, city, phone } = req.body;
  const sqlproductput =
    "UPDATE regis SET fname = ?, lname= ? , add1 = ?, add2 = ?, postalcode = ?, phone = ?, city = ? WHERE email = ?;";
  db.query(
    sqlproductput,
    [fname, lname, add1, add2, postalcode, phone, city, cusemail],
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "Server failed to do the task" });
      }
      res.send(result);
    }
  );
});

// Route to fetch category list from addcat table
app.get("/getcatpro", (req, res) => {
  const sql = "SELECT categoryName, categoryId FROM addcat";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching categories:", err);
      res.status(500).json({ error: "Failed to fetch categories" });
      return;
    }
    res.json(results);
  });
});

app.get("/getcatsub", (req, res) => {
  const sql = "SELECT categoryName, categoryId FROM addcat";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching categories:", err);
      res.status(500).json({ error: "Failed to fetch categories" });
      return;
    }
    res.json(results);
  });
});

app.get("/getsubcatpro", (req, res) => {
  const { categoryId } = req.query;
  console.log("categoryName:", categoryId);
  const sqlgetsubcatpro =
    "SELECT subcategoryId,subcategoryname FROM addsubcat  WHERE categoryId= ?;";
  db.query(sqlgetsubcatpro, [categoryId], (err, results) => {
    if (err) {
      console.error("Error fetching subcategories:", err);
      res.status(500).json({ error: "Failed to fetch subcategories" });
      return;
    }
    console.log(results);
    res.json({ subcategories: results });
  });
});

app.post("/addpro", (req, res) => {
  const {
    categoryId,
    subcategoryId,
    pname,
    pid,
    color,
    gender,
    prize,
    stock,
    deslg,
    dessm,
    collection,
    strapmaterial,
    style,
    proimg,
  } = req.body;

  const sql =
    "INSERT INTO addproduct (categoryId, subcategoryId, pname, pid, color, gender, prize, stock, deslg, dessm, collection, strapmaterial, style,proimg) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

  const values = [
    categoryId,
    subcategoryId,
    pname,
    pid,
    color,
    gender,
    prize,
    stock,
    deslg,
    dessm,
    collection,
    strapmaterial,
    style,
    proimg,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Failed to add product:", err);
      res.status(500).send("Failed to add product");
    } else {
      console.log("Product added successfully");
      res.status(200).send("success");
    }
  });
});

app.get("/getproduct", (req, res) => {
  const sql = "SELECT * FROM addproduct";
  db.query(sql, (err, result) => {
    // console.log(result);
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
});

// ...
// ...
app.post("/savePaymentDetails", (req, res) => {
  const { email, cardnumber, nameoncard, expdate, securityCode } = req.body;
  const query = `INSERT INTO payment (email, cardnumber, nameoncard, expdate, securitycode)
                 VALUES (?, ?, ?, ?, ?)`;
  const values = [email, cardnumber, nameoncard, expdate, securityCode];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error saving payment details:", err);
      res.status(500).json("error");
    } else {
      console.log("Payment details saved successfully");
      res.json("success");
    }
  });
});

// Assuming you're using Express.js for the backend

app.get("/getproduct/:id", (req, res) => {
  const { id } = req.params;
  const sqlGetProduct = "SELECT * FROM addproduct WHERE pid = ?";

  db.query(sqlGetProduct, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Server failed to retrieve product" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = result[0];
    res.json(product);
  });
});

app.post("/addtocart", (req, res) => {
  const product = req.body;
  const product_name = req.body.pname;
  console.log(product_name);
  const product_id = req.body.pid;
  const product_price = req.body.prize;
  const color = req.body.color;
  const strapmaterial = req.body.strapmaterial;
  const proimg = req.body.proimg;
  db.query(
    "INSERT INTO cart (pid,pname,prize,color,strapmaterial,proimg) VALUES (?,?,?,?,?,?)",
    [product_id, product_name, product_price, color, strapmaterial,proimg],
    (error, results) => {
      if (error) {
        console.log("Error inserting product into cart:", error);
        res.status(500).json({ error: "Failed to insert product into cart" });
        return;
      }

      console.log("Product added to cart successfully!");
      res.sendStatus(200);
    }
  );
});

app.get("/cart", (req, res) => {
  const query = "SELECT * FROM cart";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching cart data from MySQL:", err);
      res.status(500).json({ error: "Failed to fetch cart data" });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to update cart data
app.put("/updatecart/:pid", (req, res) => {
  const cartId = req.params.pid;
  const { amount } = req.body;

  const query = "UPDATE cart SET quantity = ? WHERE pid = ?";

  db.query(query, [amount, cartId], (err, result) => {
    if (err) {
      console.error("Error updating cart data in MySQL:", err);
      res.status(500).json({ error: "Failed to update cart data" });
    } else {
      res.json({ message: "Cart data updated successfully" });
    }
  });
});

app.delete("/cart/:pid", (req, res) => {
  const pid = req.params.pid; // Extract the pid value from req.params
  const deleteQuery = "DELETE FROM cart WHERE pid = ?";

  db.query(deleteQuery, [pid], (err, results) => {
    if (err) {
      console.error("Error deleting item from cart:", err);
      res.sendStatus(500);
      return;
    }

    if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});


app.delete("");
app.listen(5000, () => console.log("Server listening on port 5000"));
