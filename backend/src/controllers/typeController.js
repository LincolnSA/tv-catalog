const data = require("../database/types");

module.exports = {
  async index(req, res) {
    const types = data;
    return res.status(200).json(types);
  },
  async show(req, res) {
    const { id } = req.params;
    const [type] = data.filter((element) => element.id === +id);

    if (!type) return res.status(404).json({ msg: "Type not found!" });

    return res.status(200).json(type);
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
