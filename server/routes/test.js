// Our router module
const router = require("express").Router();

// Our controller
const TestController = require("../controllers/testController.js");

// Our routes
router.get("/random_array", TestController.randomArray);
router.get("/random_integer", TestController.randomInteger);
router.get("/roll_dice", TestController.rollDice);
router.get("/text_metrics", TestController.textMetrics);

// We have to export our changes
module.exports = router;
