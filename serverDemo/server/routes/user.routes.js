const GamesControllers = require("../controllers/user.cortollers")
console.log(GamesControllers);

module.exports = (app) => {
    app.get("/api/Games", GamesControllers.findAllGames )
    app.pst("/api/Games", GamesControllers.addGame )
}