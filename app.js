require("dotenv").config();

const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
const path = require("path");
const app = express();

//Heroku HTTPS redirect
app.use(sslRedirect());

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API Routes
const routes = require("./routes.js");
app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = (process.env.PORT || 5000);
app.listen(port, () => console.log(`Listening on ${port}`));
