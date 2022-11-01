const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

const sendMe = {
  slackUsername: "NoobDev",
  backend: true,
  age: 22,
  bio: "Heyyy, nice to be here, i am a driven web developer with extra passion for Backend",
};

app.get("/", (req, res) => {
  res.send(sendMe);
});

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong");
    return;
  }
  console.log(`server running at http://localhost:${port}`);
});
