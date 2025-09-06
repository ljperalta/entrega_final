const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const { hashPassword } = require('./pass.js');

const generateMockPet = () => ({
  name: faker.animal.petName(),
  specie: faker.animal.type(),
  birthDate: faker.date.past(5).toISOString().split('T')[0],
  adopted: faker.datatype.boolean(),
});

const generatePets = (count) => {
  return Array.from({ length: count }, () => generateMockPet());
};

const generateMockUser = () => ({
  _id: new mongoose.Types.ObjectId(),
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  password: hashPassword('coder123'),
  role: faker.helpers.arrayElement(['user', 'admin']),
  pets: [],
});

const generateUsers = (count) => {
  console.log(`Generating ${count} users in generateMockUser`);
  return Array.from({ length: count }, () => generateMockUser());
};

module.exports = {
  generatePets,
  generateUsers,
};