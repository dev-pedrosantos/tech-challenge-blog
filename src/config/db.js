const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
  }
);

// Função para testar a conexão
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com MySQL estabelecida com sucesso.");
  } catch (error) {
    console.error("❌ Erro ao conectar no MySQL:", error);
  }
}

testarConexao();

module.exports = sequelize;
