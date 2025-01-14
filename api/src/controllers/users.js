const { query } = require('express');
const db = require ('../config/db');  // Import database connection

function createUser(req, res) {
    const user = req.body.user;
    console.log(user);
    // try {
    //     query = "START TRANSACTION";
    //     query += "INSERT INTO a_accounts (a_accounts_mail, a_accounts_pwd, a_accounts_name, a_accounts_firstname, a_accounts_city, a_accounts_zip, a_accounts_street, a_accounts_number, a_accounts_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    //     query += "SET @last_id = LAST_INSERT_ID();";
    //     query += "INSERT INTO p_password (p_password_user, p_password_pwd0) VALUES (@last_id, ?);";
    //     query += "INSERT INTO p_password (p_password_user, p_password_pwd1, p_password_pwd2, p_password_pwd3, p_password_pwd4, p_password_pwd5, p_password_pwd6, p_password_pwd7, p_password_pwd8, p_password_pwd9, p_password_pwd10) VALUES (@last_id, ?);";
    //     query += "COMMIT;";
    //     db.query(query,
    //         [mail, pwd, name, firstname, city, zip, street, number, type, pwd, pwd, pwd, pwd, pwd, pwd, pwd ,pwd, pwd, pwd], (err, result) => {
    //         if (err) {
    //             res.status(404).json({ error: err.message });
    //         } else {
    //             console.log('User added:', result);
    //             res.status(200).json(result);
    //         }
    //     });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}

module.exports = {
    createUser
};