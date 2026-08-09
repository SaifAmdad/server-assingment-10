const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const dbLink = process.env.MONGODB_URL;

module.exports = { port, dbLink };
