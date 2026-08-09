const app = require("./src/app");
const connectDB = require("./src/db/connectDB");

app.listen(8900, async (req, res) => {
  try {
    console.log(`Server is running fine at http://localhost:8900`);
    await connectDB();
  } catch (error) {
    console.log(error, "index.js");
  }
});
