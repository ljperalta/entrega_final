const GenericRepository = require("./GenericRepository.js");

class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
}

module.exports = UserRepository;
