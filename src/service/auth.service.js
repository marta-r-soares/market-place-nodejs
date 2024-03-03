const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

const generateToken = (userId) => jwt.sign({ id: userId }, "$2b$10$I3sJkKu4c7KHL8XfUD8MbujdqIkB2ww2qRpLJmH8ehe2VkC5LaKzq", { expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
};