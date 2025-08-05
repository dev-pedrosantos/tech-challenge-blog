const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const Post = require("./models/Post");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", postRoutes); // <- ESSA LINHA É IMPORTANTE

async function iniciarApp() {
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
}

iniciarApp();
