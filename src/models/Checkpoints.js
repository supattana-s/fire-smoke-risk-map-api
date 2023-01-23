module.exports = (sequelize, DataTypes) => {
    const Checkpoints = sequelize.define(
        "Checkpoints",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    );

    Checkpoints.associate = (db) => {
        Checkpoints.hasMany(db.Status, {
            foreignKey: {
                name: "checkpointsId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        });
    };

    return Checkpoints;
};
