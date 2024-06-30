const db = require("../dbinstance");

const removeDonationCenter = async (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM `donation_center` WHERE DC_ID = ?";

    db.query(query, [id], (err, result) => {
        if (err)
            return res.json(err)
        if (result.affectedRows > 0)
            return res.json("Donation Center removed successfully.");
        else
            return res.json("No Donation Center found with the provided ID.");
    })
}


module.exports = removeDonationCenter;