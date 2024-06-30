const db = require("../dbinstance")

const editPersonalData = async function (req, res) {
    const { id } = req.params;
    const { name, age, gender, nationality, icNumber } = req.body;

    const query = "UPDATE donor SET Donor_Name = ?, Donor_Age = ?, Gender = ?, Nationality = ?, IC_Number = ? WHERE Donor_ID = ?;";
    const values = [name, age, gender, nationality, icNumber, id];
    const result = await db.promise().query(query, values);
    const { affectedRows } = result[0];

    if (affectedRows > 0)
        return res.json("Data Had Been Updated Successfully")
    else
        return res.json("An Error Occurred");
}

module.exports = editPersonalData;