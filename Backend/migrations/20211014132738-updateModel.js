"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.removeColumn("Customers", "first_name");
    // await queryInterface.removeColumn("Customers", "last_name");
    // await queryInterface.addColumn("Customers", "name", Sequelize.STRING);
    // await queryInterface.addColumn("Customers","type", Sequelize.STRING);
    // await queryInterface.addColumn("Admins", "type", {
    //   type: Sequelize.STRING,
    //   defaultValue: "admin",
    // });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
