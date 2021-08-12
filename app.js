const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wikiRouter = require('./routes/wiki');
// const usersRouter = require('./routes/users');
console.log(wikiRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);
// app.use('/users', usersRouter);
app.get("/", async (req, res) => {
  res.send("hello world");
});

const init = async () => {
  const PORT = 1337;
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();

