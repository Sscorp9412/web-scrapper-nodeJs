// ** import all files
const express = require("express"); // ** npm install express @desc framework used to create REST API
const path = require("path"); // ** inbuilt dependency @desc get access to various function for paths
const sessions = require("express-session"); // ** npm install express-session @desc create sessions
const multer = require("multer");
const cors = require("cors");
const NodeCache = require( "node-cache" );
require("dotenv").config();

// global variable
global.mongoose = require("mongoose");
global.myCache = new NodeCache();

// ** initialise app
const app = express();
// ** env variables
const { APP_NAME, PORT, DATABASE_URL, SESSIONS_SECRET } = process.env;
app.use(express.static(path.join(__dirname, "assets")));
app.use(cors());
app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());
app.use("/api", require("./routes/index"));
// ** adding sessions

app.get('/', (req, res) => {
   res.send('App started at /api');
})

const port = PORT || 4001;
app.listen(port, () => {
   console.log(`${APP_NAME} is listening at http://localhost:${port}`);
});
