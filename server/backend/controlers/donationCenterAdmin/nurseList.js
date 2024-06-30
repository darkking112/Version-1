const db = require("../dbinstance");

const nurseList = async (req, res) => {
    try {
        const query = "SELECT Nurse_ID, Nurse_Name, Nurse_Email FROM `nurse`";
        const [data] = await db.promise().query(query);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err });
    }
};
module.exports = nurseList;