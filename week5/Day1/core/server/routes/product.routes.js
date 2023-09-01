const ProductsControllers = require("../controllers/products.controllers")

module.exports = (app) =>{
    app.get("/api/products" , ProductsControllers.getProducts);
    app.post("/api/products", ProductsControllers.AddProduct)
    app.get("/api/products/:id", ProductsControllers.findOneProduct)
    app.put("/api/products/:id", ProductsControllers.updateOneProduct)
    app.delete("/api/products/:id" , ProductsControllers.deleteOneProduct)
}