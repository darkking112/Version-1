const db = require("../dbinstance")

const appointmentList = async function (req, res) {
    const { DCID, timeSlot } = req.body;

    const today = new Date();
    const todayFormetted = today.toISOString().split('T')[0];

    const query = "SELECT `Appointment_ID`, `Donor_Name`, `IC_Number`, `Appointment_Time`, `Appointment_Status`"
                    + "FROM appointment_list WHERE DC_ID = ? AND Appointment_Time = ? AND "
                    + `(Appointment_Status = "Pending" OR Appointment_Status = "Interviewing" OR Appointment_Status = "Processing")`
    const values = [DCID, timeSlot];
    const result = await db.promise().query(query, values);
    if (result)
        return res.json(result[0]);
    else
        return res.json("No Records Found");
}

module.exports = appointmentList;