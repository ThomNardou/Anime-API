const UserModel = (sequelize, dataType) => {
    return sequelize.define(
        "t_user",
        {
            id: {
                type: dataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: dataType.STRING,
                allowNull: false,
                unique: { msg: "cette utilisateur est déjà pris" },
                validate: {
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire.",
                    },
                }
            },
            password: {
                type: dataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Le Mot de passe ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le mot de passe est une propriété obligatoire.",
                    },
                }
            }
            

        }
    );
}
export { UserModel }