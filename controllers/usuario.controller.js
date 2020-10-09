const usuarioService = require("../services/usuario.service");

module.exports = (app) => {

    app.get("/usuario", async (req, res) => res.send(await usuarioService.find({})));
    app.get("/usuario/:id", async (req, res) => res.send(await usuarioService.find({ _id: req.params.id })));
    app.post("/usuario", async (req, res) => res.send(await usuarioService.create(req.body)));
    app.put("/usuario", async (req, res) => res.send(await usuarioService.updateOne({ _id: req.body._id }, req.body)))
    app.delete("/usuario/:id", async (req, res) => res.send(await usuarioService.deleteOne({ _id: req.params.id })));

}