const { OK, NG } = require("../config/contant");

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define(
        "Status",
        {
            status: {
                type: DataTypes.ENUM(OK, NG),
                allowNull: false,
                defaultValue: NG,
            },
        },
        {
            underscored: true,
        }
    );

    Status.associate = (db) => {
        Status.belongsTo(db.DetailsChecklist, {
            foreignKey: {
                name: "detailsChecklistId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        });

        Status.belongsTo(db.Checkpoints, {
            foreignKey: {
                name: "checkpointsId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        });
    };

    return Status;
};
