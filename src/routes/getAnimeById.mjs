import { success } from "./helper.mjs";
import { Anime } from "../db/sequelize.mjs";
import express from "express";

const  animeIdRooter = express();

animeIdRooter.get("/:id", (req, res) => { 
    Anime.findByPk(req.params.id)
    .then((anime) => {
        if (anime == null) {
            return res.status(404).json({ error: "Anime not found, please try with an other ID" });
        }

        const message = `The anime with the id ${req.params.id} has been found`;
        res.json(success(message, anime));
    })
    .catch((err) => {
        const message = "An error has occured, please try again later";
        res.status(500).json({ message, data: err });
    });
})

export { animeIdRooter };
