const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');

const readContent = async () => {
  const content = await fs.readFile(
    path.join(__dirname, 'db', 'contacts.json'),
    'utf8',
  );
  const result = JSON.parse(content);
  return result;
};

const listContacts = async () => {
  try {
    return await readContent();
  } catch (error) {
    return `Oops, something went wrong... \n ${error}`;
  }
};

const getContactById = async contactId => {
  try {
    const contacts = await readContent();
    const contact = contacts.find(contact => contact.id === contactId);
    return contact;
  } catch (error) {
    return `Oops, something went wrong... \n ${error}`;
  }
};

const removeContact = async contactId => {
  try {
    const contacts = await readContent();
    const indexOfContact = contacts.findIndex(
      currentValue => currentValue.id == contactId,
    );
    if (indexOfContact !== -1) {
      const removed = contacts.splice(indexOfContact, 1);
      await fs.writeFile(
        path.join(__dirname, 'db', 'contacts.json'),
        JSON.stringify(contacts, null, 2),
      );
      console.log('\n Operation Success. Removed contact: \n');
      return removed;
    } else {
      return 'Index not found';
    }
  } catch (error) {
    return `Oops, something went wrong... \n ${error}`;
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await readContent();
    const newContact = { name, email, phone, id: uuidv4() };
    contacts.push(newContact);
    await fs.writeFile(
      path.join(__dirname, 'db', 'contacts.json'),
      JSON.stringify(contacts, null, 2),
    );
    console.log('\n Operation Success. New contact added \n');
    return newContact;
  } catch (error) {
    return `Oops, something went wrong... \n ${error}`;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
