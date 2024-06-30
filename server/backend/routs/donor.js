const express = require("express")
// const login = require("../controlers/login")
const signup = require("../controlers/donor/signup")
const bookAnAppointment = require("../controlers/donor/bookAnAppointment")
const viewAvailablAppointments = require("../controlers/donor/viewAvailableAppointments")
const cancelAppointment = require("../controlers/donor/cancelAppointment")
const viewPreviousAppointments = require("../controlers/donor/viewPrviousAppointments")
const viewPersonaldata = require("../controlers/donor/viewPersonalData");
const editPersonalData = require("../controlers/donor/editPersonalData")
const viewBookedAppointment = require("../controlers/donor/viewBookedAppointment")
const router = express.Router();

router.post("/signup", signup)
router.get("/view-booked-appointment", console.log("requetsed"))
router.post("/book-an-appointment", bookAnAppointment)
router.get("/view-available-appointments", viewAvailablAppointments)
router.post("/cancel-appointment/:id", cancelAppointment)
router.get("/view-previous-appointments/:id", viewPreviousAppointments)
router.get("/view-personal-data/:id", viewPersonaldata)
router.post("/edit-personal-data/:id", editPersonalData)


module.exports = router;
