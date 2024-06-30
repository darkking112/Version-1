const db = require('./dbinstance')

const login = async (req, res) => {
    let { email, password } = req.body;

    const query = "SELECT Donor_Email, Donor_Password FROM `donor`" + ` WHERE Donor_Email = '${email}';`
    db.query(query, (err, data) => {
        if (data.length === 0)
            return res.json("user not found")
        else 
        {
            const { Donor_Email, Donor_Password } = data[0];
            password = JSON.stringify(password);
            if (Donor_Email === email && Donor_Password === password)
                console.log("access accepted");
            else
                return res.json("Email or Password is Wrong")
        }
        if (err)
            return res.json(err);
        return res.json(data)
    })
};

module.exports = login;