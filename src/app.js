const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", postRoutes);

// Conecta banco e sincroniza (somente quando não for teste)
if (process.env.NODE_ENV !== "test") {
  (async () => {
    try {
      await sequelize.authenticate();
      console.log("✅ Conexão com MySQL estabelecida com sucesso.");
      await sequelize.sync({ alter: true });
      console.log("📦 Banco sincronizado com sucesso.");
      app.listen(process.env.PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("❌ Erro ao iniciar aplicação:", error);
    }
  })();
}

module.exports = app;
