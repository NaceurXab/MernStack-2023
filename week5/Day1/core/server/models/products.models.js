const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:[true, "the title is required"]
    },
    Price:{
        type:Number,
        required : [true,"the price is required"]
    },
    Description : {
        type: String,
        required : [true, "the description is required"]
    }
})

module.exports = mongoose.model("products" , ProductsSchema)