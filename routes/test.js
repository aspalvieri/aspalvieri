// Our router module
const router = require("express").Router();

// Our controller
const TestController = require("../controllers/testController.js");

// Our routes
router.get("/random_array", TestController.randomArray);

// We have to export our changes
module.exports = router;
