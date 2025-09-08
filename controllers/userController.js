const user = require('../models/User');
const bcrypt = require('bcrypt');

const login =(req, res) => {
  res.send('Login route');
};

const register = async (req, res) => {
    try {
        const { name, username, password } = req.body;
        const newPassword = bcrypt.hashSync(password, 10);
        
        const newUser = await user.create({
            name,
            username,
            password: newPassword
        });

        res.status(201).send({
            user: {
            id: user.id,
            name: user.name,
            username: user.username
            }
        });

        
    } catch (error) {
        res.status(500).send({
            error: 'Internal Server Error',
            details: error.message,
        });
    }
};


module.exports = {
    login,
    register
};