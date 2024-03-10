import { success } from "../helper.mjs";
import { Anime } from "../../db/sequelize.mjs";
import { Author } from "../../db/sequelize.mjs";
import { Op } from "sequelize";
import express from "express";
import { auth } from "../../auth/auth.mjs";

const  animeAuthorRooter = express();

animeAuthorRooter.get("/:id/anime", auth, (req, res) => {
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
    .catch((err) => {
        const message = "An error has occured, please try again later";
        res.status(500).json({ message, data: err });
    });
})

export { animeAuthorRooter };