const { Listen } = require("./server");

const Init = () => {
  return new Promise((resolve, reject) => {
    Listen(3000, "localhost");
    resolve();
  });
};

module.exports = { Init };
