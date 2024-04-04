const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      teams: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timmestamps: false }
  );
};
