const Pet = require("../dao/Pets.dao.js")
const User = require("../dao/Users.dao.js");
const Adoption = require("../dao/Adoption.dao.js");

const PetRepository = require("../repository/PetRepository.js");
const UserRepository = require("../repository/UserRepository.js");
const AdoptionRepository = require("../repository/AdoptionRepository.js");

const petsService = new PetRepository(new Pet());
const usersService = new UserRepository(new User());
const adoptionsService = new AdoptionRepository(new Adoption());

module.exports = { petsService, usersService, adoptionsService };
