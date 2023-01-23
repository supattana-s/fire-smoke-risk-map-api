module.exports = (sequelize, DataTypes) => {
    const ChecklistTypes = sequelize.define(
        "ChecklistTypes",
        {
            topic: {
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

    ChecklistTypes.associate = (db) => {
        ChecklistTypes.hasMany(db.DetailsChecklist, {
            foreignKey: {
                name: "checklistTypesId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        });
    };

    return ChecklistTypes;
};
