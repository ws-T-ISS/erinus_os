'use strict';
import {hash} from 'bcrypt'

module.exports = {
  async up (queryInterface) {
    const encrypted_password = await hash("administrador", 14)
    await queryInterface.bulkInsert('tb_operador', [
      {
        nome: "administrador",
        usuario: "administrador",
        email: "administrador@bol.com",
        senha: encrypted_password,
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('tb_operador', {usuario: "administrador"}, {})
  }
};
