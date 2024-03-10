import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import express from "express";
import { auth } from "../../auth/auth.mjs";

const updateAnimeRooter = express();

updateAnimeRooter.put("/:id", auth, (req, res) => {
    Anime.findByPk(req.params.id)
        .then((updatedAnime) => {
            if (updatedAnime == null) {
                return res.status(404).json({ error: "Anime not found, please try with an other ID" });
            }

            return Anime.update(req.body, {
                where: { id: req.params.id }
            })
                .then(() => {
                    const message = `The anime with the id ${req.params.id} has been updated`;
                    res.json(success(message, updatedAnime));
                })
        })
        .catch((err) => {
            const message = "An error has occured, please try again later";
            res.status(500).json({ message, data: err });
        });
})

export { updateAnimeRooter }