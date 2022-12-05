const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async( req, res = response ) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if ( user ) {
            res.status(400).json({
                ok: false,
                msg: 'The email already exists.',
            });
            return;
        }

        user = new User( req.body );

        // Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        // Guardar en DB
        await user.save();

        // Generar JWT
        const token = await generateJWT( user.id, user.name );
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            msg: 'register_ok',
            token
        });

    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Please, contact the administrator.'
        });
    }
};

const loginUser = async(req, res = response ) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if ( !user ) {
            res.status(400).json({
                ok: false,
                msg: 'The email do not exists.',
            });
            return;
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, user.password )
        if ( !validPassword ) {
            res.status(400).json({
                ok: false,
                msg: 'The password is incorrect.',
            });
            return;
        }

        // Generar JWT
        const token = await generateJWT( user.id, user.name );

        res.json({
            ok: true,
            msg: 'login_ok',
            uid: user.id,
            name: user.name,
            email: user.email,
            token
        });
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Please, contact the administrator.'
        });
    }

};

const revalidateToken = async(req, res = response ) => {

    const { uid, name } = req;

    // Generar un nuevo JWT y retornarlo en esta petición
    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        msg: 'renew_ok',
        token
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}