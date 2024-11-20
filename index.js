const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Exporta o app para que o Vercel o utilize
module.exports = app;
