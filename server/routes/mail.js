// Our router module
const router = require("express").Router();

// Our controller
const MailController = require("../controllers/mailController.js");

// Our routes
router.post("/send", MailController.sendMail);

// We have to export our changes
module.exports = router;
