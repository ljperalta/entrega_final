const bcrypt = require('bcrypt');

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

exports.hashPassword = hashPassword;
