const db = require('../dbinstance')

const signup = async (req, res) => {
    let { name, email, password, phooneNo, age, gender, nationality, ic } = req.body;
    let query = "SELECT Donor_Email FROM `donor`" + ` WHERE Donor_Email = '${email}';`
    db.query(query, (err, data) => {
        if (data.length === 0)
        {
            query = `INSERT INTO donor (Donor_Name, Donor_Age, Donor_Email, Donor_Password, Phone_Number, Gender, Nationality, IC_Number)
                VALUES ('${name}', ${age}, '${email}', '${password}', '${phooneNo}', '${gender}', '${nationality}', '${ic}');`
            db.query(query, (err, data) => {
            if (err)
                return res.json(err);
            return res.json("Account Created Successfully")
            })
        }
        else
            return res.json("User Already Exist")
        if (err)
            return res.json(err);
    })
    
    return;
}

module.exports = signup;