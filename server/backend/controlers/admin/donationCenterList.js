const db = require("../dbinstance");

const donationCenterList = async (req, res) => {
    const query = "SELECT * FROM `donation_center_list`";
    db.query(query, (err, data) => {
        if (err)
            return res.json(err);
        if (data.length > 0)
            return res.json(data);
        else
            return res.json("No Records Found");
    })
}

module.exports = donationCenterList;