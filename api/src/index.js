const { PORT, HOST } = require("./configuration/");
const { connectDB } = require("./utils/db.js");
const express = require("express");
const app = express();
const { User } = require("./models/user");

app.get("/users", async (req, res) => {
  try {
    const user = new User({ userName: "Sam" });
    await user.save();
    // const result = await User.deleteMany({});
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    res.send({ err });
  }
});

app.get("/test", (req, res) => {
  res.send(`HELLO WORLD`);
});

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
}

connectDB()
  .on("error", console.error.bind(console, "connection error:"))
  .once("open", startServer);
