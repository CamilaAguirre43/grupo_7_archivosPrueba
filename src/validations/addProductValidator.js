const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('price')
    .notEmpty().withMessage('Debes indicar el precio'),

    check('description')
    .notEmpty().withMessage('Es preferible que incluyas una descripción del producto'),

    check('category')
    .notEmpty().withMessage('Debes Indicar una categoría'),

    check('talle')
    .notEmpty().withMessage('Indica los talles del producto'),

    check('images')
    .notEmpty().withMessage('Debes cargar imagenes del producto')
]