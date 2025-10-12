const express = require("express");
const cors = require("cors");

const { router: apiRouter } = require("./routes/apiRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(apiRouter);

const Listen = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server running in : ${host}:${port}`);
  });
};

module.exports = { Listen };
