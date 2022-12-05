/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { loginUser, createUser, revalidateToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
    '/', 
    [
        check('email', 'Email is not valid.').isEmail(),
        check('password', 'Password must be at least 6 chars.').isLength(6),
        validateFields
    ],
    loginUser 
);

router.post(
    '/new', 
    [
        check('name', 'Name is mandatory.').not().isEmpty(),
        check('email', 'Email is not valid.').isEmail(),
        check('password', 'Password must be at least 6 chars.').isLength(6),
        validateFields
    ],
    createUser
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;