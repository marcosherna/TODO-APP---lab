const express = require("express");
const cors = require("cors");

const { router: apiRouter } = require("./routes/apiRouter");
const errorHandler = require("./handlers/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(apiRouter);

app.use(errorHandler);

const Listen = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server running in : ${host}:${port}`);
  });
};

module.exports = { Listen };
