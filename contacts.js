const { doesNotMatch } = require('assert');
const fs = require('fs/promises');
const path = require('path');

const dbFileName = 'contacts.json';
const dbFile = `db/${dbFileName}`;
const contactsPath = path.join(__dirname, dbFileName);

// (function listContacts() {
//   fs.readFile(dbFile)
//     .then(data => console.log(data.toString()))
//     .catch(err => console.log(err.message));
// })();

// (function getContactById(contactId) {
//   const [, , id] = process.argv;
//   fs.readFile(dbFile).then(data => {
//     const db = JSON.parse(data.toString());
//     db.map(contact => {
//       if (contact.id === id) {
//         console.log(contact);
//       }
//     });
//   });
// })();

// function removeContact(contactId) {
//   // ...твой код
// }

// (function removeContact(contactId) {
//   const [, , id] = process.argv;
//   fs.readFile(dbFile, 'utf8')
//     .then(data => {
//       const db = JSON.parse(data);
//       db.map(contact => {
//         if (contact.id === id) {
//           db.splice(db.indexOf(contact), 1);
//           fs.writeFile(dbFile, JSON.stringify(db));
//         }
//       });
//     })
//     .catch(err => console.log(err.message));
// })();

// (function addContact() {
//   const [, , name, email, phone] = process.argv;
//   fs.readFile(dbFile, 'utf8').then(data => {
//     const db = JSON.parse(data);
//     db.push({ name, email, phone });
//     fs.writeFile(dbFile, JSON.stringify(db));
//   });
//     // Прикрутить уникальный айдишник из либы
// })();
