const StudioModel = (sequelize, DataTypes) => {
    return sequelize.define('t_studio', {
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
        SiteLink: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "SiteLink cannot empty"
                }
            }
        },
        logoLink: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "LogoLink cannot empty"
                }
            }
        }
    })
};

export { StudioModel };