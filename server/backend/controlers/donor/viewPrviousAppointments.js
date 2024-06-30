const db = require("../dbinstance")

const viewPreviousAppointments = async function (req, res) {
    const { id } = req.params;

    const query = "SELECT Appointment_ID, Appointment_Date, Appointment_Time, DC_Name, Appointment_Status "
                    + "FROM previous_appointments WHERE Donor_ID = ?";
    const result = await db.promise().query(query, [id]);
    return res.json(result[0]);
}

module.exports = viewPreviousAppointments;