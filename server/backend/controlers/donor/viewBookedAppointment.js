const db = require("../dbinstance")

const viewBookedAppointment = async function (req, res) {
    const { id } = req.body;

    const query = `SELECT * FROM appointment WHERE Donor_ID = ? AND Appointment_Status = "Pending"`;
    const result = await db.promise().query(query, [id]);

    if (result[0].length > 0) {
        let appointment = [true, result[0]];
        return res.json(appointment);
    }
    else
        return res.json([false]);
}

module.exports = viewBookedAppointment;