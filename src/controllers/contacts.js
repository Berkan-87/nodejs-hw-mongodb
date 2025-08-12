const contactsService = require('../services/contacts');
const createError = require('http-errors');

// Tüm kişileri listele
const getAllContacts = async (req, res) => {
  const contacts = await contactsService.listContacts();
  res.json({ status: 200, data: contacts });
};

// ID'ye göre kişi getir
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);
  if (!contact) {
    throw createError(404, 'Contact not found');
  }
  res.json({ status: 200, data: contact });
};

// Yeni kişi ekle
const createContact = async (req, res) => {
  const { name, phoneNumber, email, isFavourite, contactType } = req.body;

  if (!name || !phoneNumber || !contactType) {
    throw createError(400, 'name, phoneNumber and contactType are required');
  }

  const newContact = await contactsService.createContact({
    name,
    phoneNumber,
    email: email || null,
    isFavourite: isFavourite || false,
    contactType,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

// Kişi güncelle (kısmi güncelleme)
const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updateData = req.body;

  const updatedContact = await contactsService.updateContact(contactId, updateData);
  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
};

// Kişi sil
const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const deletedContact = await contactsService.deleteContact(contactId);
  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(204).send(); // Gövdesiz yanıt
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
