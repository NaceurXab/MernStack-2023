

const express = require('express');
const app = express()

// --- MIDDLEWARE --
app.use(express.json(), express.urlencoded({extended: true}))

// to load env.variables
require("dotenv").config()
require("./config/mongoose.config")
require("./routes/user.routes")(app)

const port = process.env.port

app.listen(port, () =>{
    console.log('>>>>> server is running on port', port);
})

