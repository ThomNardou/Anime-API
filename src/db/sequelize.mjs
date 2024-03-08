import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_anime', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 6033,
    logging: true
});

export { sequelize };