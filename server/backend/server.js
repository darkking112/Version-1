const express = require('express')
const cors = require('cors')
const path = require('path') 

const auth = require("./routs/auth.js")
const donor = require("./routs/donor.js")
const admin = require("./routs/admin.js")
const nurse = require("./routs/nurse.js")
const donationCenterAdmin = require("./routs/donationCenterAdmin.js")
const app = express()

// app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use("/auth", auth);
app.use("/donor", donor);
app.use("/admin", admin); 
app.use("/donationcenteradmin", donationCenterAdmin);
app.use("/nurse", nurse);


const port = 5000

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "blood_donation",
//     port: "3307",
//     // multipleStatements: true
// })

// db.connect((err) => {
//     if (err)
//         return console.log(err);
//     console.log("connected");
// })

// app.get("/donors_list", (req, res) => {
//     const query = "SELECT * FROM `donor`;";
//     db.query(query, (err, data) => {
//         console.log(JSON.stringify(data));
//         // console.log(json(data)); 
//         if (err)
//             return res.json(err)
//         // console.log(json(data))
//         return res.json(data)
//     })
// })

app.listen(port, () => {
    console.log("app is running");
})
