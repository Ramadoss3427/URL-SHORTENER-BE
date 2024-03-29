const app = require("./app");
const { PORT } = require("./utlis/config");
const { log } = require("./utlis/logger");

app.listen(4005, () => {
  log("server is running");
});