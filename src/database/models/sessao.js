import { Sequelize } from "sequelize";
import config from '../config/database'
const sequelize = new Sequelize(config)

const Sessao = sequelize.define('Sessao', { 
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
    }
},
{
    tableName: "tb_sessao",
    timestamps: true
}
);

export default Sessao