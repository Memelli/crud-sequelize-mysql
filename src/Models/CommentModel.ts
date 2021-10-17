import { DataTypes } from 'sequelize/types';
import { db } from '../database/db';

export const CommentModel = db.define('comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  unlike: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
