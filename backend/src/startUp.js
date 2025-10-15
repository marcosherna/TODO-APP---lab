if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const { Listen } = require("./server");
const { sequelize } = require("./database/models");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const Init = async () => {
  await sequelize.authenticate();
  Listen(PORT, HOST);
};

module.exports = { Init };
