import { DataTypes } from 'sequelize';
import { db } from '../database/db';

export const CommentModel = db.define('comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
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
