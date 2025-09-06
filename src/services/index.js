const Pet = require("../dao/Pets.dao.js")
const User = require("../dao/Users.dao.js");
const PetRepository = require("../repository/PetRepository.js");
const UserRepository = require("../repository/UserRepository.js");

const petsService = new PetRepository(new Pet());
const usersService = new UserRepository(new User());

module.exports = { petsService, usersService };
