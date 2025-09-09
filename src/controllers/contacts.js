<<<<<<< HEAD
import createHttpError from 'http-errors';
import {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { sortByList } from '../db/models/contacts.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseContactFilterParams } from '../utils/parseContactFilterParams.js';

export const getContactsController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query, sortByList);
  const filter = parseContactFilterParams(req.query);
  const data = await getContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user._id,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById({
    _id: contactId,
    userId: req.user._id,
  });
  if (!contact) {
    next(createHttpError(404, `Contact with id ${contactId} was not found`));
    return;
  }
=======
import express from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

router.get('/:contactId', async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
<<<<<<< HEAD
};

export const createContactController = async (req, res) => {
  const contact = await createContact({ ...req.body, userId: req.user._id });
  res.status(201).json({
    status: 201,
    message: 'Successfully created contact!',
    data: contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(
    { _id: contactId, userId: req.user._id },
    req.body,
  );
  if (!result) {
    next(createHttpError(404, `Contact with id ${contactId} was not found`));
    return;
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.data,
  });
};

export const upsertContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(
    { _id: contactId, userId: req.user._id },
    req.body,
    { upsert: true },
  );
  if (!result) {
    next(createHttpError(404, `Contact with id ${contactId} was not found`));
    return;
  }
  const status = result.isNew ? 201 : 200;
  res.status(status).json({
    status,
    message: `Successfully upserted a contact!`,
    data: result.data,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await deleteContact({ _id: contactId, userId: req.user._id });
  if (!contact) {
    next(createHttpError(404, `Contact with id ${contactId} was not found`));
    return;
  }
  res.status(204).send();
};
=======
});

export default router;
>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6
