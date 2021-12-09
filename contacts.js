const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');

const dbFileName = 'contacts.json';
const contactsPath = path.join(__dirname, '/db', dbFileName);

function listContacts() {
  fs.readFile(contactsPath)
    .then(data => {
      console.log(data.toString());
      console.log('\x1b[32m Succcess');
    })
    .catch(err => console.log('\x1b[31m Error ', err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const db = JSON.parse(data.toString());
      db.map(contact => {
        if (contact.id === contactId.toString()) {
          console.log(contact);
          console.log('\n \x1b[32m Succcess');
        }
      });
    })
    .catch(err => console.log('\x1b[31m Error', err.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8')
    .then(data => {
      const db = JSON.parse(data);
      db.map(contact => {
        if (contact.id === contactId.toString()) {
          db.splice(db.indexOf(contact), 1);
          fs.writeFile(contactsPath, JSON.stringify(db))
            .then(() => console.log('\n \x1b[32m Removal successful'))
            .catch(err => console.log('\x1b[31m Error', err.message));
        }
      });
    })
    .catch(err => console.log('\x1b[31m Error', err.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8')
    .then(data => {
      const db = JSON.parse(data);
      const id = uuidv4();
      db.push({ id, name, email, phone });
      fs.writeFile(contactsPath, JSON.stringify(db));
      console.log('Added contact: ');
      getContactById(id);
    })
    .catch(err => console.log('\x1b[31m Error', err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
