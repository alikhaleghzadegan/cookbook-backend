const express = require("express");
const app = express();

let recipe = [{ id: 1, name: "ABC" }, { id: 2, name: "DEF" }];

app.get('/', (req, res) => {
    res.send(recipe);
});

app.listen(3000, () => { console.log("running in port 3000") });