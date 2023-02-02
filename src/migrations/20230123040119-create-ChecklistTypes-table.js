"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable("checklist_types", {
            topic: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable("checklist_types");
    },
};
