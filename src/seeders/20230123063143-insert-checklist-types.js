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
        return queryInterface.bulkInsert("checklist_types", [
            {
                topic: "Electric",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                topic: "Dust or Mist collector duct, Wet Scrumber",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                topic: "Liquid Chemical/ Combustible object",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                topic: "Flamable/Gas",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                topic: "Spark occur area",
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
        return queryInterface.bulkDelete("checklist_types", null);
    },
};
