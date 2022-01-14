require("dotenv").config();

const sslRedirect = require("heroku-ssl-redirect").default;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

//Heroku HTTPS redirect
app.use(sslRedirect());

//CrossOrigin Requests
var allowedOrigins = [
  "http://localhost:3000",
  "https://aspalvieri.herokuapp.com"
];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      let msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API Routes
const routes = require("./routes/index");
app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = (process.env.PORT || 5000);
app.listen(port, () => console.log(`Server is running on port ${port}.`));

module.exports = { app };
