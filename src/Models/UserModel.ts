import { DataTypes } from 'sequelize';
import { db } from '../database/db';
import bcrypt from 'bcrypt';

export const UserModel = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
