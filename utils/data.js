const { v4: uuidv4 } = require('uuid');

function uniqueEmail() {
  const u = uuidv4().slice(0, 8);
  return `qa_${u}@example.test`;
}

function getDefaultPassword() {
  return process.env.DEFAULT_PASSWORD || 'Password123!';
}

function exampleAddress() {
  return {
    firstName: 'QA',
    lastName: 'Tester',
    address1: '123 Test Street',
    city: 'Testville',
    zip: '10001',
    phone: '5551234567',
    country: 'United States of America',
    state: 'Alabama'
  };
}

module.exports = { uniqueEmail, getDefaultPassword, exampleAddress };
