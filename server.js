const express = require("express");
const cors = require("cors");
const db = require("./app/models/db_index");
const { create } = require("./app/controllers/controller");
const sendMail = require("./app/mailer/mailer");

const Tutorial = db.tutorials;

db.sequelize.sync();
const app = express();

var corsOptions = {
  origin: "https://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.static("./public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/info", (req, res) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  Tutorial.findAll({ where: { email: `${req.body.email}` } })
    .then((data) => {
      if (data.length == 0) {
        // Validate request

        // Create a Tutorial
        const tutorial = {
          email: req.body.email,
          name: req.body.name,
        };

        // Save Tutorial in the database
        Tutorial.create(tutorial)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the Tutorial.",
            });
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });

  sendMail(req, res);
});

app.listen(8081, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("listening to port", 8081);
});
