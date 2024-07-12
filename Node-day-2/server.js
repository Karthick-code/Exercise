const express = require("express");
const app = express();
const port= 3000;

// Use the cors middleware


app.get("/menu", function (req, res) {
  res.send("Menu: Small lemonade medium lemonade large lemonade");
});

app.post("/order", (req, res) => {
    const size = req.query.size;
    res.send(`Thanks you order recieved: ${size}`);
});

app.listen(3000, () => {
  console.log(`Lemonade stand listening at http://localhost:${port}`);
});