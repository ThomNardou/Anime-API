import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import express from "express";
import { auth } from "../../auth/auth.mjs";

const  animeRouter = express();

animeRouter.get("/", auth, (req, res) => { 
    Anime.findAll()
    .then((animeList) => {
        const message = "List of all anime";
        res.json(success(message, animeList));
    })

})

export { animeRouter };
