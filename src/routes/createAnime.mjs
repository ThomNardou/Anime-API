import { success } from "./helper.mjs";
import { Anime } from "../db/sequelize.mjs";
import express from "express";

const createAnimeRooter = express();

createAnimeRooter.post("/", (req, res) => {
    Anime.create(req.body)
    .then((anime) => {
        const message = "The anime has been created";
        res.json(success(message, anime));
    })
    .catch((err) => {
        const message = "An error has occured, please try again later";
        res.status(500).json({ message, data: err });
    });
})