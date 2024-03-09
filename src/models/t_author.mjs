const AuthorModel = (sequelize, DataTypes) => {
    return sequelize.define('t_author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Name is required"
                },
                notEmpty: {
                    msg: "Name cannot empty"
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "FirstName is required"
                },
                notEmpty: {
                    msg: "FirstName cannot empty"
                }
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Age is required"
                },
                notEmpty: {
                    msg: "Age cannot empty"
                }
            }
        },
    });
}

export { AuthorModel };