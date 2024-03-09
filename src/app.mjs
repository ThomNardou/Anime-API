import express from "express";
import { sequelize } from "./db/sequelize.mjs";
import { initDb } from "./db/sequelize.mjs";
import { animeRouter } from "./routes/Anime/getAllAnime.mjs";
import { animeIdRooter } from "./routes/Anime/getAnimeById.mjs";
import { animeStudioRooter } from "./routes/Anime/getAnimeByStudio.mjs";
import { animeAuthorRooter } from "./routes/Anime/getAnime.Author.mjs";
import { createAnimeRooter } from "./routes/Anime/createAnime.mjs";
import { deleteAnimeRooter } from "./routes/Anime/deleteAnime.mjs";
import { updateAnimeRooter } from "./routes/Anime/updateAnime.mjs";

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
app.use("/api/anime", createAnimeRooter);
app.use("/api/anime", deleteAnimeRooter);
app.use("/api/anime", updateAnimeRooter);

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