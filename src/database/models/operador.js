import { Sequelize, DataTypes } from "sequelize"
import config from '../config/database'
const sequelize = new Sequelize(config)

const Operador = sequelize.define('Operador', {
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
    }
},{
    timestamps: true,
    tableName: 'tb_operador'
});

export default Operador