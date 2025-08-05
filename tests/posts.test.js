const request = require("supertest");
const app = require("../src/app");

describe("Testes da API de Posts", () => {
  it("Deve criar um novo post com sucesso", async () => {
    const response = await request(app).post("/api/posts").send({
      titulo: "Post de teste",
      conteudo: "Conteúdo para validar CI/CD",
      autor: "Teste Automático",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.titulo).toBe("Post de teste");
  });
});
