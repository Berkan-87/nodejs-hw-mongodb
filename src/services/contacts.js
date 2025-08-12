const { nanoid } = require('nanoid');

let contacts = [
  { id: '1', name: 'Berkan', phoneNumber: '555-1234', email: 'berkan@example.com', isFavourite: false, contactType: 'personal' },
  { id: '2', name: 'Ahmet', phoneNumber: '555-5678', email: 'ahmet@example.com', isFavourite: true, contactType: 'work' },
];

// Tüm kişileri listele
const listContacts = async () => {
  return contacts;
};

// ID'ye göre kişi bul
const getContactById = async (id) => {
  return contacts.find(c => c.id === id);
};

// Yeni kişi ekle
const createContact = async (contactData) => {
  const newContact = {
    id: nanoid(),
    ...contactData,
  };
  contacts.push(newContact);
  return newContact;
};

// Kişiyi güncelle (kısmi güncelleme)
const updateContact = async (id, updateData) => {
  const index = contacts.findIndex(c => c.id === id);
  if (index === -1) return null;

  contacts[index] = {
    ...contacts[index],
    ...updateData,
  };
  return contacts[index];
};

// Kişiyi sil
const deleteContact = async (id) => {
  const index = contacts.findIndex(c => c.id === id);
  if (index === -1) return null;

  const deletedContact = contacts[index];
  contacts.splice(index, 1);
  return deletedContact;
};

module.exports = {
  listContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
