const express = require("express")

const appointmentList = require("../controlers/nurse/appointmentList")
const changeAppointmentStatus = require("../controlers/nurse/changeAppointmentStatus")
const approveAppointment = require("../controlers/nurse/approveAppointment")
const rejectAppointment = require("../controlers/nurse/rejectAppointment")

const router = express.Router();

router.get("/appointment-list", appointmentList);
router.get("/change-appointment-status/:id", changeAppointmentStatus);
router.post("/approve-appointment/:id", approveAppointment);
router.post("/reject-appointment/:id", rejectAppointment);
module.exports = router;