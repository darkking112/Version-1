const db = require("../dbinstance");

const removeNurse = async function (req, res) {
    const { id } = req.params;
    console.log(req);
    const query = "DELETE FROM `nurse` WHERE `Nurse_ID` = ?;";
    
    const result = await db.promise().query(query, [id]);
    const { affectedRows } = result[0];

    if (affectedRows > 0)
        return res.json("Nurse Removed Successfully");
    else
        return res.json("An Error Occurred");
}

module.exports = removeNurse;