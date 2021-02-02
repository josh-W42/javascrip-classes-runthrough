const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("You made it");
});

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});