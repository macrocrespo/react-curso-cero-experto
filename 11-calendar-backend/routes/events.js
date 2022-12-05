/**
 * Rutas de Eventos / Events
 * host + /api/events
 */

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');
const router = Router();

// Todas las peticiones tiene que pasar por JWT
router.use( validateJWT );

// Obtener eventos
router.get('/', getEvents );

// Crear un nuevo evento
router.post('/', 
    [ 
        check('title', 'Title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').custom( isDate ),
        check('end', 'End date is mandatory').custom( isDate ),
        validateFields
    ],
    createEvent );

// Actualizar evento
router.put('/:id', 
[ 
    check('title', 'Title is mandatory').not().isEmpty(),
    check('start', 'Start date is mandatory').custom( isDate ),
    check('end', 'End date is mandatory').custom( isDate ),
    validateFields
],
updateEvent );

// Eliminar el evento
router.delete('/:id', deleteEvent );

module.exports = router;