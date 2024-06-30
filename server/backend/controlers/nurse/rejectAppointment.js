const db = require("../dbinstance")

const rejectAppointment = async function (req, res) {
    const { id } = req.params;
    
    const query = "UPDATE `appointment` SET Appointment_Status = 'Rejected' WHERE Appointment_ID = ?;";
    const result = await db.promise().query(query, [id]);
    const { affectedRows } = result[0];
    if (affectedRows > 0)
        return res.json("Appointment Rejected Successfully");
    else 
        return res.json("An Error Accurred");
}

module.exports = rejectAppointment;