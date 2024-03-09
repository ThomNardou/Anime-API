import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import express from "express";

const  animeRouter = express();

animeRouter.get("/", (req, res) => { 
    Anime.findAll()
    .then((animeList) => {
        const message = "List of all anime";
        res.json(success(message, animeList));
    })

})

export { animeRouter };
