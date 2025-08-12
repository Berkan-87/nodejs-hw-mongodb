const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/contacts');
const ctrlWrapper = require('../utils/ctrlWrapper');

// Tüm kişileri listele
router.get('/', ctrlWrapper(ctrl.getAllContacts));

// ID ile kişi getir
router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

// Yeni kişi ekle
router.post('/', ctrlWrapper(ctrl.createContact));

// Kişi güncelle (PATCH)
router.patch('/:contactId', ctrlWrapper(ctrl.updateContact));

// Kişi sil
router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

module.exports = router;
