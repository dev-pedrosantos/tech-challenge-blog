const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: true, // cria colunas createdAt e updatedAt automaticamente
  }
);

module.exports = Post;
