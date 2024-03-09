import { success } from "./helper.mjs";
import { Anime } from "../db/sequelize.mjs";
import express from "express";

const  animeStudioRooter = express();

animeStudioRooter.get("/:fk/anime", (req, res) => { 
    Anime.findAll({ where: { fkStudio: req.params.fk } })
    .then((anime) => {
        if (anime == null) {
            return res.status(404).json({ error: "Anime not found, please try with an other FK" });
        }

        const message = `The anime with the studio ${req.params.fk} has been found`;
        res.json(success(message, anime));
    })
    .catch((err) => {
        const message = "An error has occured, please try again later";
        res.status(500).json({ message, data: err });
    });
})

export { animeStudioRooter };
