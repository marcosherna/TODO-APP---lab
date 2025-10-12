const express = require("express");

const app = express();

const Listen = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server running in : ${host}:${port}`);
  });
};

module.exports = { Listen };
