require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
const routes = require("./routes.js");
app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = (process.env.PORT || 5000);
app.listen(port, () => console.log(`Listening on ${port}`));
