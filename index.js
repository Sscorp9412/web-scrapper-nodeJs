const express = require("express");
const path = require("path");
const cors = require("cors");
const NodeCache = require( "node-cache" );
require("dotenv").config();
global.myCache = new NodeCache();

// ** initialise app
const app = express();
// ** env variables
const { APP_NAME, PORT} = process.env;
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

const port = PORT;
app.listen(port, () => {
   console.log(`${APP_NAME} is listening at http://localhost:${port}`);
});
