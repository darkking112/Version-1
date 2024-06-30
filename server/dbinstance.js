const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blood_donation",
    port: "3307",
    timezone: 'Z'
    // multipleStatements: true
})
db.connect((err) => {
    if (err)
        return console.log(err);
    console.log("connected");
})

module.exports = db;