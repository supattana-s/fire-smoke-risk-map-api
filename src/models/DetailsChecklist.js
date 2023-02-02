module.exports = (sequelize, DataTypes) => {
    const DetailsChecklist = sequelize.define(
        "DetailsChecklist",
        {
            details: {
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

    DetailsChecklist.associate = (db) => {
        DetailsChecklist.belongsTo(db.ChecklistTypes, {
            foreignKey: {
                name: "checklistTypesId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        });
    };

    return DetailsChecklist;
};
