import express from "express";
import { sequelize } from "./db/sequelize.mjs";
import { initDb } from "./db/sequelize.mjs";
import { animeRouter } from "./routes/getAllAnime.mjs";
import { animeIdRooter } from "./routes/getAnimeById.mjs";
import { animeStudioRooter } from "./routes/getAnimeByStudio.mjs";
import { animeAuthorRooter } from "./routes/getAnime.Author.mjs";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the REST anime API!");
});

app.get("/api", (req, res) => {
    res.redirect("/");
});

app.use("/api/anime", animeRouter);
app.use("/api/anime", animeIdRooter);
app.use("/api/studio", animeStudioRooter);
app.use("/api/author", animeAuthorRooter);

// initDb();

sequelize
  .authenticate()
  .then(() => {
    console.log("The connection to the database has been established.")
  })
  .catch((err) => {
    console.error("Unable to connect to the database");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});