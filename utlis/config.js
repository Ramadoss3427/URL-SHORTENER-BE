
require("dotenv").config();

const URL = process.env.ATLAS_URI;
const PORT = process.env.PORT;
const EMAIL_ADDRESS = process.env.EMAIL_ADDESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const SECRET = process.env.SECRET;

module.exports = {
  URL,
  PORT,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  SECRET,
 };
