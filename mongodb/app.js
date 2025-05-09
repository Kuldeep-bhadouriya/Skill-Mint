const express = require("express");
const app = express();
const userModel = require("./models/user");

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;

  let createdUser = await userModel.create({
    username,
    email,
    password,
    age,
  });
});

app.listen(3000);
