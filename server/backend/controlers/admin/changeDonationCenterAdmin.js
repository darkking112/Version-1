const db = require("../dbinstance")

const changeDonationCenterAdmin = async function (req, res) {
    const { id } = req.params;
    const { DCAdminName, adminAge, adminEmail, adminPassword } = req.body;

    // insertDCATbaleQuery == Insert donation_center_admin Table Variable 
    const insertDCATbaleQuery = "UPDATE donation_center_admin "
                    + "SET DC_Admin_Name = ?, DC_Admin_Age = ?, DC_Admin_Email = ?, DC_Admin_Password = ?"
                    + "WHERE DC_Admin_ID = ?;";
    let values = [DCAdminName, adminAge, adminEmail, adminPassword, id];

    const result = await db.promise().query(insertDCATbaleQuery, values);
    const { affectedRows } = result[0];
    if (affectedRows > 0)
        res.json("Admin Updated Successfully");
    else
        res.json("Admin not found");
}

module.exports = changeDonationCenterAdmin;