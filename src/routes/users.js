var express = require('express');
var router = express.Router();
var path = require("path");
var multer = require("multer");
var registerValidate = require("../validations/registerValidator");
var { login, register , processRegister, processLogin, logout, profile, profileEdit, profileDelete } = require('../controllers/userController');
var viewCheck = require('../middlewares/viewCheck');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, "public/img/users")
    },
    filename: (req,file,cb) =>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });


/* GET users listing. */
router.get('/login', viewCheck, login);
router.post("/login", processLogin);
router.get('/register', viewCheck, register);
router.get('profile',userCheck, profile);
router.get('edit/:id', profileEdit);
router.delete('/:id', profileDelete);
router.post("/register", upload.single("avatar"), registerValidate, processRegister);
router.get("/logout", logout);

module.exports = router;
