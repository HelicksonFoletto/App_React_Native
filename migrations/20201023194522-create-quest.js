'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HighFever: {
        type: Sequelize.BOOLEAN
      },
      seasickness: {
        type: Sequelize.BOOLEAN
      },
      unwell: {
        type: Sequelize.BOOLEAN
      },
      tiredness: {
        type: Sequelize.BOOLEAN
      },
      abdominalPain: {
        type: Sequelize.BOOLEAN
      },
      headache: {
        type: Sequelize.BOOLEAN
      },
      eyePain: {
        type: Sequelize.BOOLEAN
      },
      redSpots: {
        type: Sequelize.BOOLEAN
      },
      IamFine: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Quests');
  }
};