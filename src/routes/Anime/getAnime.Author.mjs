import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import { Author } from "../../db/sequelize.mjs";
import { Op } from "sequelize";
import express from "express";

const  animeAuthorRooter = express();

animeAuthorRooter.get("/:id/anime", (req, res) => {
    Anime.findAll({
        include: {
            model: Author,
            required: true,
            where: {
                id: {[Op.eq]: req.params.id}
            }
        }
    })
    .then((anime) => {
        if (anime == null) {
            return res.status(404).json({ error: "Anime not found, please try with an other FK" });
        }

        const message = `The anime with the author ${req.params.id} has been found`;
        res.json(success(message, anime));
    })
})

export { animeAuthorRooter };