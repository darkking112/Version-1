const axios = require('axios');

const db = require("../dbinstance");

// let address = {
//     cityName: "",
//     streetName: "",
//     postcode: ""
// }

async function extractAddress(link) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${link}&key=AIzaSyDt07BAB3o1FDMYTwBk3e8AuwjkJJBzZco`;
    try {
        const response = await axios.get(url);
        if (response.data.status === "OK") {
            const result = response.data.result;
            const addressComponents = result.address_components;

            const city = addressComponents.find(component => component.types.includes("locality"));
            const street = addressComponents.find(component => component.types.includes("route"));
            const postcode = addressComponents.find(component => component.types.includes("postal_code"));
            // console.log(city, postcode);
            // address = {
            //     cityName: city,
            //     streetName: street,
            //     postcode: postcode
            // }
        } 
        else {
            throw new Error('Places API call failed due to: ' + response.data.status);
        }

    } catch (err) {
        console.log('Failed to fetch place details:', err);
        throw err;
    }
}

async function addDonationCenter(req, res) {
    const { DCAdminName, adminAge, adminEmail, adminPassword, DCName, DCAdressLink, cityName, streetName, postcode} = req.body;

    try {
        // const address = await extractAddress(DCAdressLink);
        
        // console.log(address.cityName);
        // Now that address has been awaited, you can proceed with the insertion
        const addressQuery = "INSERT INTO `address` (City_Name, Street_Name, Post_Code, Address_Link) VALUES (?, ?, ?, ?)";
        const addressValues = [cityName, streetName, postcode, DCAdressLink];
        const addressResult = await db.promise().query(addressQuery, addressValues);
        const addressID = addressResult[0].insertId;

        const adminQuery = "INSERT INTO `donation_center_admin` (DC_Admin_Name, DC_Admin_Age, DC_Admin_Email, DC_Admin_Password) VALUES (?, ?, ?, ?)";
        const adminValues = [DCAdminName, adminAge, adminEmail, adminPassword];
        const adminResult = await db.promise().query(adminQuery, adminValues);
        const adminID = adminResult[0].insertId;

        const donationCenterQuery = "INSERT INTO `donation_center` (DC_Name, Address_ID, DC_Admin_ID) VALUES (?, ?, ?)";
        const donationCenterValues = [DCName, addressID, adminID];
        await db.promise().query(donationCenterQuery, donationCenterValues);

        res.json({ message: "Donation Center Added Successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
    }
}

module.exports = addDonationCenter;

// INSERT INTO donation_center (`DC_Name`, `Address_ID`, `DC_Admin_ID`) VALUES ("teting", 2, 2);