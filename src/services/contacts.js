const Contact = require("../models/contact");

const getAll = () => Contact.find();
const getById = (id) => Contact.findById(id);
const create = (data) => Contact.create(data);
const update = (id, data) => Contact.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Contact.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
