//definição da rotas de usuario

const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/Cardapio');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (error) {
        return res.status(400).send({ error: 'Registration failed'});
    }
});

router.get('/recoverMenu', async (req, res) =>{
    try {
        var menu = await User.find();

        console.log(menu);

        return res.send({ menu });
    } catch (error) {
        return res.status(400).send({ error: 'Recover failed'});
    }

});

module.exports = app => app.use('/auth', router);