const data = require("../database/tvs");

module.exports = {
  async index(req, res) {
    const tvs = data;
    return res.status(200).json(tvs);
  },
  async show(req, res) {
    const { id } = req.params;
    const [tv] = data.filter((element) => element.id === +id);

    if (!tv) return res.status(404).json({ msg: "Tv not found!" });

    return res.status(200).json(tv);
  },
  async store(req, res) {
    return res.json({ msg: "criar tv" });
  },
  async update(req, res) {
    return res.json({ msg: "modificar" });
  },
  async delete(req, res) {
    return res.json({ msg: "deletar" });
  },
};
