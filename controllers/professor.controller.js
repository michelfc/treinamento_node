const professorService = require("../services/professor.service");

module.exports = (app) => {

    app.get("/professor", async (req, res) => res.send(await professorService.find({})));
    app.get("/professor/:id", async (req, res) => res.send(await professorService.find({ _id: req.params.id })));
    app.post("/professor", async (req, res) => res.send(await professorService.create(req.body)));
    app.put("/professor", async (req, res) => res.send(await professorService.updateOne({ _id: req.body._id }, req.body)))
    app.delete("/professor/:id", async (req, res) => res.send(await professorService.deleteOne({ _id: req.params.id })));

}