const product = require("../models/products.models")

const getProducts = (req , res ) =>{
    product.find()
        .then((allProducts) => res.json({allProducts}))
        .catch((err) => console.log(err));
}
const AddProduct = (req , res ) =>{
    const { body } = req;
    product.create(body)
        .then((newProducts) => res.json({newProducts}))
        .catch((err) => console.log(err));
}

const findOneProduct = (req , res) =>{
    product.findOne({_id: req.params.id })
        .then((oneProduct) => res.json({oneProduct}))
        .catch((err) => console.log(err))
}
const updateOneProduct = (req, res) => {
    product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => { res.json({ updatedProduct }) })
        .catch(err => console.log(err))
}

const deleteOneProduct = (req, res) =>{
    product.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => console.log(err))
}

module.exports = {getProducts,AddProduct,findOneProduct,updateOneProduct , deleteOneProduct}
