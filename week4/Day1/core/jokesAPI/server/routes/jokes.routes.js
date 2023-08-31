const JokesControllers  = require("../controllers/jokes.controllers") 

module.exports = (app) => {
    app.get("/api/jokes", JokesControllers.getJokes);
    app.post("/api/jokes", JokesControllers.createJoke);
    app.get("/api/jokes/:_id", JokesControllers.getOneJoke);
    app.put("/api/jokes/:_id", JokesControllers.updateJoke);
    app.delete("/api/jokes/:_id", JokesControllers.deleteJoke);
};