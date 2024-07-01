const db = require("../../dbinstance");

function convertTo24Hour(timeSlot) {
    const [time, modifier] = timeSlot.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12' && modifier === 'am') {
        hours = '00'; // Correctly handle midnight
    } else if (hours === '12' && modifier === 'pm') {
        hours = '12'; // Correctly handle noon
    } else if (modifier === 'pm') {
        hours = parseInt(hours, 10) + 12; // Convert PM times to 24-hour format
    }

    return `${hours}:${minutes}`;
}

const bookAnAppointment = async function (req, res) {
    const { Donor_ID, DC_ID, Appointment_Date, Appointment_Time } = req.body;
    const query = "INSERT INTO `appointment` (Appointment_Date, Appointment_Time, Appointment_Status, Donor_ID, DC_ID) "
                + "VALUES (?, ?, ?, ?, ?);";

    const values = [Appointment_Date, convertTo24Hour(Appointment_Time), "Pending", Donor_ID, DC_ID];

    try {
        const result = await db.promise().query(query, values);
        const { insertId } = result[0];

        if (insertId) {
            return res.json("Appointment Booked Successfully");
        } else {
            return res.json("An Error Occurred");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("An internal server error occurred");
    }
};

module.exports = bookAnAppointment;