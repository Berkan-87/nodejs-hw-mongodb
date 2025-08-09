const createError = require("http-errors");
const contactsService = require("../services/contacts");

const getAllContacts = async (req, res) => {
  const contacts = await contactsService.getAll();
  res.json({
    status: 200,
    message: "Successfully fetched all contacts!",
    data: contacts
  });
};

const getContactById = async (req, res) => {
  const contact = await contactsService.getById(req.params.contactId);
  if (!contact) throw createError(404, "Contact not found");
  res.json({
    status: 200,
    message: "Successfully fetched the contact!",
    data: contact
  });
};

const createContact = async (req, res) => {
  const { name, phoneNumber, contactType } = req.body;
  if (!name || !phoneNumber || !contactType) {
    throw createError(400, "Missing required fields");
  }
  const newContact = await contactsService.create(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a contact!",
    data: newContact
  });
};

const updateContact = async (req, res) => {
  const updated = await contactsService.update(req.params.contactId, req.body);
  if (!updated) throw createError(404, "Contact not found");
  res.json({
    status: 200,
    message: "Successfully patched a contact!",
    data: updated
  });
};

const deleteContact = async (req, res) => {
  const deleted = await contactsService.remove(req.params.contactId);
  if (!deleted) throw createError(404, "Contact not found");
  res.status(204).send();
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
