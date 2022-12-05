const {request, response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = ( req = request, res = response, next ) => {
    
    // Leer header x-token
    const token = req.header('x-token');
    
    if ( !token ) {
        res.status(401).json({
            ok: false,
            msg: 'No token found.',
        });
        return;
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.uid = payload.uid;
        req.name = payload.name;
        
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token not valid.',
        });
        return;
    }

    next();
}

module.exports = {
    validateJWT
}