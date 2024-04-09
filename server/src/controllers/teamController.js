const { Team } = require("../db");

const findAllTeams = async () => {
  const teams = await Team.findAll();
  return teams;
};

module.exports = findAllTeams;
