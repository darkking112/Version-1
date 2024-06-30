const db = require("../dbinstance");

const addNurse = async function (req, res) {
    const { id } = req.params;
    console.log(req.body);

    const { Nurse_Name, Nurse_Age, Nurse_Email, Nurse_Password, Gender, License_No } = req.body;

    try {
        const query = "INSERT INTO `nurse` "
                + "(`Nurse_Name`, `Nurse_Age`, `Nurse_Email`, `Nurse_Password`, `Gender`, `License_No`, `DC_ID`)"
                + "VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [Nurse_Name, Nurse_Age, Nurse_Email, Nurse_Password, Gender, License_No, id];

        const result = await db.promise().query(query, values);
        const { insertId } = result[0];
        if (insertId) {
            const query = "SELECT Nurse_ID, Nurse_Name, Nurse_Email FROM `nurse`";
            const [data] = await db.promise().query(query);
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err });
    }
}

module.exports = addNurse;