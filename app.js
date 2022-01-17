const express = require("express");
const app = express();
const port = 5001;

//  make express aware of the style.css file
app.use(express.static("public"));

// main page
app.get("/home",(request, response) => {
    response.sendFile(`${__dirname}/views/index.html`)
});

//  about page
app.get("/about",(request, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
});

// works page
app.get("/works",(request, response) => {
    response.sendFile(`${__dirname}/views/works.html`)
});

app.listen(port, console.log("server started"))