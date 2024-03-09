const AnimeModel = (sequelize, dataTypes) => {
    return sequelize.define('t_anime', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
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
        nbrEpisodes: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "NbrEpisodes is required"
                },
                notEmpty: {
                    msg: "NbrEpisodes cannot empty"
                }
            }
        },
        coverImages: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "CoverImages is required"
                },
                notEmpty: {
                    msg: "CoverImages cannot empty"
                }
            }
        },
        releaseDate: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "ReleaseDate is required"
                },
                notEmpty: {
                    msg: "ReleaseDate cannot empty"
                }
            }
        },
        fkAuthor: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "FkAuthor is required"
                },
                notEmpty: {
                    msg: "FkAuthor cannot empty"
                }
            }
        },
        fkStudio: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "fkStudio is required"
                },
                notEmpty: {
                    msg: "fkStudio cannot empty"
                }
            }
        },
    })
}

export { AnimeModel };