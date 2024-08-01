const jwt = require('jsonwebtoken');

const maxAge = 60 * 60 * 24;
const secretKey = 'gizli kelime';

const createToken = (id) => {
    return jwt.sign({ id }, secretKey, { expiresIn: maxAge });
};

const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};

module.exports = { createToken, verifyToken, maxAge };
