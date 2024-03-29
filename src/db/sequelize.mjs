import { Sequelize, DataTypes } from "sequelize";
import { AuthorModel } from "../models/t_author.mjs";
import { StudioModel } from "../models/t_studio.mjs";
import { AnimeModel } from "../models/t_anime.mjs";
import { UserModel } from "../models/t_user.mjs";
import bcrypt from "bcrypt";

const sequelize = new Sequelize('db_anime', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 6033,
    logging: true
});

const Anime = AnimeModel(sequelize, DataTypes);
const Author = AuthorModel(sequelize, DataTypes);
const Studio = StudioModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

Anime.belongsTo(Author, { foreignKey: "fkAuthor" });
Author.hasMany(Anime, { foreignKey: "fkAuthor" });

let initDb = () => {
    return sequelize
        .sync({ force: true })
        .then(() => {
            importUser();
            importAuthor();
            importAnime();
            importStudio();
            console.log("Database & tables created!");
        });
}

let importAnime = () => {
    Anime.create({
        name: "Naruto",
        nbrEpisodes: 220,
        coverImages: "https://www.google.com",
        releaseDate: "2002-10-03",
        fkAuthor: 1,
        fkStudio: 1
    })
}

let importAuthor = () => {
    Author.create({
        name: "Kishimoto",
        firstName: "Masashi",
        age: 46
    })
}

let importUser = () => {
    bcrypt.hash("admin123", 10).then((hashPassword) => {
        User.create({
            username: "admin",
            password: hashPassword
        })
    })
}

let importStudio = () => {
    Studio.create({
        name: "Pierrot",
        SiteLink: "https://www.pierrot.jp",
        logoLink: "https://www.google.com"
    })
}

export { sequelize, initDb, Anime, Author, Studio, User };