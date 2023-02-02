"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("checkpoints", [
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "plug",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "R-134a",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("checkpoints", null);
    },
};
