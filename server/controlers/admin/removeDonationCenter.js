const db = require("../../dbinstance");

const removeUser = async (id) => {
    const query = "DELETE FROM `users` WHERE `User_ID` = ?";
    await db.promise().query(query, [id]);
}

const getDonationCenterID = async (id) => {
    const query = "SELECT DC_ID FROM `donation_center_list` where User_ID = ?";
    const result = await db.promise().query(query, [id]);
    return result[0][0];
}

const removeAdmin = async (id) => {
    const query = "DELETE FROM `donation_center_admin` WHERE `User_ID` = ?";
    await db.promise().query(query, [id]);
}

const removeDonationCenter = async (req, res) => {
    const { id } = req.params;
    const {DC_ID} = await getDonationCenterID(id);
    const query = "DELETE FROM `donation_center` WHERE `DC_ID` = ?";

    try {
        const result = await db.promise().query(query, [DC_ID]);
        const { affectedRows } = result[0];

        removeAdmin(id);
        if (affectedRows > 0) {
            await removeUser(id);
            return res.json("Donation Center removed successfully.");
        } else {
            return res.json("No Donation Center found with the provided ID.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("An internal server error occurred");
    }
}

module.exports = removeDonationCenter;