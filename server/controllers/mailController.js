const nodemailer = require("nodemailer");
const axios = require("axios");

const SECRET_KEY = process.env.SECRET_KEY;

const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

exports.sendMail = (req, res) => {
  const { token, name, email, message } = req.body;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;
  axios.post(VERIFY_URL).then(cb => {
    if (cb.data.success === true) {
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.status(500).json({ status: err });
        } else {
          res.status(200).json({ status: "Message Sent" });
        }
      });
    }
    else {
      res.status(500).json({ status: "Invalid recaptcha code." });
    }
  }).catch(err => {
    res.status(500).json({ status: err });
  });
};