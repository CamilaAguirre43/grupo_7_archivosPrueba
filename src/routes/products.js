var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const {productsList, detail, cart, add, edit, destroy,save, update} = require('../controllers/productsController');

const addProductsValidator = require('../validations/addProductValidator')
const adminCheck = require("../middlewares/adminCheck");
const userCheck = require("../middlewares/userCheck");


/* subida de archivos */
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/img')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})


router.get('/', productsList)
router.get('/detail/:id', detail);
router.get('/cart', userCheck, cart);

router.get('/add', adminCheck, add);
router.post('/add', upload.array('images'),addProductsValidator, save);

router.get('/edit/:id', adminCheck, edit);
router.put('/edit/:id', upload.array('images'), update)

router.delete('/:id', destroy);


module.exports = router;