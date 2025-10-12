const express = require("express");

const { router: apiRouter } = require("./routes/apiRouter");

const app = express();

app.use(apiRouter);

const Listen = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server running in : ${host}:${port}`);
  });
};

module.exports = { Listen };
