const path = require('path');
const fs = require("fs");

const productsPath = path.join(__dirname, "../data/products.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
const categories = require('../data/categories_db');
const {validationResult} = require('express-validator');

module.exports = {
    productsList: (req,res) =>{
        return res.render('./products/products', {products})
    },

    detail : (req,res) => {
        
        let product = products.find(product => product.id === +req.params.id);

        return res.render('./products/productDetail', { product, products});
    },

    cart : (req,res) => {
        return res.render('./products/productCart');
    },

    add : (req,res) => {
        return res.render('./products/productAdd', {categories});
    },

    edit : (req,res) => {

        let product = products.find(producto => producto.id === +req.params.id)

        return res.render('./products/productEdit', { product, categories, talles: ["38", "39", "40", "41"] }); 
    },

    destroy: (req,res) => {

        let destroy = products.filter(product => product.id !== +req.params.id)

        res.cookie("remenber", req.session.userLog, { maxAge: 60000 })

        fs.writeFileSync(productsPath, JSON.stringify(destroy, null, 2), "utf-8")

        return res.redirect("/admin")
    },
    save : (req,res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
            const {name, price, category, talle, description, images } = req.body;

            var imagenes = req.files.map(imagen => imagen.filename)
        
            let producto = {
            id: products[products.length - 1].id + 1, 
            name, 
            price: +price, 
            category, 
            talle: typeof talle === "string" ? [talle] : talle,
            description: [description], 
            images: req.files.length != 0 ? imagenes : ['default-image.png']
            }
            products.push(producto)

            fs.writeFileSync(productsPath, JSON.stringify(products,null,2),'utf-8')
            
            res.cookie("remenber", req.session.userLog, { maxAge: 60000 })
            
            return res.redirect('/admin')
        } else{
            return res.render('./products/productAdd', 
            {   categories, 
                errores : errors.mapped(),
                old : req.body});
        }
    },
     update : (req,res) => {
        const {name, price, category, description, talle, images} = req.body;

        var imagenes = req.files.map(imagen => imagen.filename)
        
        products.forEach(product => {
			if (product.id === +req.params.id) {
				product.name = name
				product.price = +price
				product.category = category
                if (talle) {
                   product.talle = typeof talle === "string" ? [talle] : talle
                } else {
                    product.talle = []
                }
				product.description = [description]
                req.files.length != 0 ? product.images = imagenes : null
			}
		})

        fs.writeFileSync(productsPath, JSON.stringify(products,null,2),'utf-8');

        res.cookie("remenber", req.session.userLog, { maxAge: 60000 })
        
         return res.render('./products/products', {products})
    } 
}
