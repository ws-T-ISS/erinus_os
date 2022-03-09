'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_sessao', { 
      codigo: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      cd_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'tb_operador',
          key: 'codigo'
        }
      },
      token: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        unique: true
      },
      bloqueado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  async down (queryInterface) {
    return queryInterface.dropTable('tb_sessao')
  }
};
