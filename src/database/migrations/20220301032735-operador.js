'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    queryInterface.createTable('tb_operador', {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
    });
  },

  async down (queryInterface) {
    return queryInterface.dropTable('tb_operador')
  }
};
