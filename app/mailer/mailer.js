var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kumarchaithanya7@gmail.com",
    pass: "SHAila.,257566",
  },
});

module.exports = function sendMail(req, res) {
  let mailOptions = {
    from: "kumarchaithanya7@gmail.com",
    to: `${req.body.email}`,
    subject: "YOU WON!!!",
    text: "Your high score is 32",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(req.body.email);
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

//////email-validator next scope
