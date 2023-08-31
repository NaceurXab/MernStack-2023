
const {Games}  = require("../models/user.model")

//!---- crud
//? READ ALL

module.exports.findAllGames = (req , res) =>{
    Games.find()
        .then(allGames =>{
            console.log(allGames);
            res.json({allGames})
        })
        .catch(err => {res.json({message : "wait a minute"})})
}
module.exports.addGame = (req , res) =>{
    Games.create()
        .then(allGames =>{
            res.json({allGames})
        })
        .catch(err => {res.json({message : "wait a minute"})})
}