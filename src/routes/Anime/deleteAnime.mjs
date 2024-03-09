import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import express from "express";

const deleteAnimeRooter = express();

deleteAnimeRooter.delete("/:id", (req, res) => {
    Anime.findByPk(req.params.id)
        .then((deletedAnime) => {
            if (deletedAnime == null) {
                return res.status(404).json({ error: "Anime not found, please try with an other ID" });
            }

            return deletedAnime.destroy({
                where: { id: req.params.id }
            })
                .then(() => {
                    const message = `The anime with the id ${req.params.id} has been deleted`;
                    res.json(success(message, deletedAnime));
                })
        })
        .catch((err) => {
            const message = "An error has occured, please try again later";
            res.status(500).json({ message, data: err });
        });
})

export { deleteAnimeRooter }