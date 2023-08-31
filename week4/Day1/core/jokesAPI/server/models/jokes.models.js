//* import mongoose to build the model
const mongoose  = require("mongoose")

//* the models - the rules the entries need to follow
const JokesSchema = new mongoose.Schema({
    Setup: {
        type: String,
        required : [true, "the setup is required"]
    },
    Punchline:{
        type: String,
        required : [true, "the punchline is required"]
    },
},{timestamps : true}); // create at and updated at 

module.exports = mongoose.model("Jokes" , JokesSchema)