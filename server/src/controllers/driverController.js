const { Driver } = require("../db");

const findAllDrivers = async () => {
  const drivers = await Driver.findAll();
  return drivers;
};

module.exports = findAllDrivers;
 