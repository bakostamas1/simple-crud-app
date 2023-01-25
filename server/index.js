const express = require("express"); // requiring express
const app = express(); // then run it
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// open port to application
app.listen(5000, () => {
    console.log("The server has started on port 5000");
});