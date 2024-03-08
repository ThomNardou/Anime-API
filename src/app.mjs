import express from "express";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the REST anime API!");
});

app.get("/api", (req, res) => {
    res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});