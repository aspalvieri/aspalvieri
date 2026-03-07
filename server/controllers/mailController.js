const nodemailer = require("nodemailer");
const axios = require("axios");

const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL_USER = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 587,
  auth: {
    user: EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify SMTP configuration at startup for early failure visibility.
transporter.verify().then(() => {
  console.log("Mail server is ready to take messages.");
}).catch((error) => {
  console.error("Mail server verification failed:", error);
});

exports.sendMail = async (req, res) => {
  const { token, name, email, message } = req.body;

  if (!token || !name || !email || !message) {
    return res.status(400).json({ status: "Missing required fields." });
  }

  const mail = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: "Contact Form Submission",
    text: `Name: ${name}\n
Email: ${email}\n
Message: ${message}`,
  };

  try {
    const verification = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: token
        }
      }
    );

    if (verification?.data?.success !== true) {
      return res.status(400).json({ status: "Invalid recaptcha code." });
    }

    await transporter.sendMail(mail);

    return res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("Failed to send contact mail:", error);
    return res.status(500).json({ status: "Unable to send message." });
  }
};
