const contactsService = require("../services/contacts");
const createError = require("http-errors");

// Tüm kontakları getir
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.json({ status: 200, data: contacts });
  } catch (error) {
    next(error);
  }
};

// ID ile kontak getir
const getContactById = async (req, res, next) => {
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (!contact) {
      throw createError(404, "Contact not found");
    }
    res.json({ status: 200, data: contact });
  } catch (error) {
    next(error);
  }
};

// Yeni kontak oluştur
const createContact = async (req, res, next) => {
  try {
    const newContact = await contactsService.createContact(req.body);
    res.status(201).json({ status: 201, message: "Successfully created a contact!", data: newContact });
  } catch (error) {
    next(error);
  }
};

// Kontak güncelle
const updateContact = async (req, res, next) => {
  try {
    const updated = await contactsService.updateContact(req.params.contactId, req.body);
    if (!updated) {
      throw createError(404, "Contact not found");
    }
    res.json({ status: 200, message: "Successfully patched a contact!", data: updated });
  } catch (error) {
    next(error);
  }
};

// Kontak sil
const deleteContact = async (req, res, next) => {
  try {
    const deleted = await contactsService.removeContact(req.params.contactId);
    if (!deleted) {
      throw createError(404, "Contact not found");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
