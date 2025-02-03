const { query } = require('express');
const db = require ('../config/db');  // Import database connection

function createUser(req, res) {
    first_name = "";
    last_name = "";
    email = "";
    password_hash = "";
    role = "";
    address = "";
    phone_number = "";
    try {
        query = "INSERT INTO users (first_name, last_name, email, password_hash, role, address, phone_number) VALUES (?,?,?,?,?,?,?);"
        db.query(query, [ first_name, last_name, email, password_hash, role, address, phone_number], (err, result) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                console.log('User successfully added:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getUser(req, res){
    email = req.params.email;
    try{
        query = "SELECT id, email, password_hash FROM users WHERE email = ?";
        db.query(query, [email], (err, result) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                console.log('User retrieved:', result);
                res.status(200).json(result);
            }
        });

    } catch (error) {
        res.status(500).json({error: "Le nom d'utilisateur ou le mot de passe n'est pas juste." });
    }
}

function connectUser (req, res){
    try{
        query = "SELECT id, email, password_hash, role FROM users WHERE id = ?";
        db.query (query, [id], (err, result) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                console.log('User retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({error: "Le nom d'utilisateur ou le mot de passe n'est pas juste." });
    }
}

function updateUser(req, res){
    try {
        query = "UPDATE users SET first_name = ?, last_name = ?, email=? password_hash=?, address=?, phone_number=?";
        db.query(query, [], (err, result) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                console.log('User successfully updated!');
                res.status(200).json(result);
            }
        });
    }catch(error){
        res.status(500).json({error: error.message });
    }
}

module.exports = {
    createUser,
    getUser,
    connectUser,
    updateUser
};