
# 📄 Documentação Técnica – Tech Challenge Blog API

## 1️⃣ Visão Geral

A **Tech Challenge Blog API** é uma aplicação RESTful desenvolvida para permitir que professores publiquem conteúdos educacionais online.  
Ela possibilita **criar, listar, buscar, atualizar e excluir posts**, armazenando as informações em um banco de dados **MySQL**, com hospedagem gratuita no **Render** e banco provisionado no **Railway**.

---

## 2️⃣ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no backend.  
- **Express.js** – Framework para criação da API REST.  
- **MySQL** – Banco de dados relacional.  
- **Sequelize ORM** – Mapeamento objeto-relacional para interagir com o banco.  
- **Postman** – Testes manuais dos endpoints.  
- **Docker** – (Opcional) Containerização da aplicação e do MySQL local.  
- **Render** – Hospedagem gratuita da API online.  
- **Railway** – Hospedagem gratuita do banco de dados MySQL.  
- **GitHub Actions (CI/CD)** – Testes automatizados em cada push.

---

## 3️⃣ Estrutura do Projeto

```
tech-challenge-blog/
│── src/
│   ├── config/
│   │   └── db.js               # Configuração do banco MySQL
│   ├── controllers/
│   │   └── postController.js   # Lógica de CRUD dos posts
│   ├── models/
│   │   └── Post.js             # Modelo Sequelize dos posts
│   ├── routes/
│   │   └── postRoutes.js       # Definição das rotas da API
│   └── app.js                  # Inicialização da aplicação
│
├── tests/                      # Testes automatizados
│   └── posts.test.js
├── .github/workflows/ci.yml    # Pipeline de CI/CD
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
└── .env (não versionado)
```

---

## 4️⃣ Endpoints da API

### 4.1 Criar Post
- **URL:** `POST /api/posts`
- **Body (JSON):**
```json
{
  "titulo": "Aula de Matemática",
  "conteudo": "Explicação sobre equações do 2º grau com exemplos práticos.",
  "autor": "Prof. João"
}
```
- **Resposta:** `201 Created`

---

### 4.2 Listar Posts
- **URL:** `GET /api/posts`
- **Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Aula de Matemática",
    "conteudo": "Explicação sobre equações do 2º grau com exemplos práticos.",
    "autor": "Prof. João"
  }
]
```

---

### 4.3 Buscar Post por ID
- **URL:** `GET /api/posts/:id`
- **Resposta:** Post correspondente ou `404 Not Found`.

---

### 4.4 Atualizar Post
- **URL:** `PUT /api/posts/:id`
- **Body (JSON):**
```json
{
  "titulo": "Aula de Matemática - Atualizada",
  "conteudo": "Conteúdo revisado com novos exercícios."
}
```
- **Resposta:** `200 OK`

---

### 4.5 Excluir Post
- **URL:** `DELETE /api/posts/:id`
- **Resposta:** `200 OK` com mensagem de sucesso.

---

### 4.6 Buscar por palavra-chave
- **URL:** `GET /api/posts/search?q=termo`
- **Exemplo:** `/api/posts/search?q=Matemática`
- **Resposta:** Lista de posts que contenham o termo no título ou conteúdo.

---

## 5️⃣ Deploy Online

- **API pública:**  
```
https://tech-challenge-blog-kefn.onrender.com
```
- Exemplo de listagem online:
```
GET https://tech-challenge-blog-kefn.onrender.com/api/posts
```

- Banco de dados hospedado no **Railway** com acesso externo configurado via variáveis de ambiente:
```
DB_HOST=nozomi.proxy.rlwy.net
DB_PORT=35475
DB_USER=root
DB_PASS=senha
DB_NAME=railway
PORT=10000
```

---

## 6️⃣ Testes Automatizados (CI/CD)

- Ao fazer `git push`, o **GitHub Actions** executa:
  - Instalação das dependências.
  - Criação do banco MySQL temporário.
  - Execução dos testes da pasta `tests/`.
- Exemplo de teste:
```js
const request = require('supertest');
const app = require('../src/app');

describe("Testes da API de Posts", () => {
  it("Deve criar um novo post com sucesso", async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        titulo: "Post CI/CD",
        conteudo: "Verificando pipeline",
        autor: "Automação"
      });

    expect(response.statusCode).toBe(201);
  });
});
```

---

## 7️⃣ Testes no Postman

- Foi gerado o arquivo **TechChallenge_Postman_Collection.json**, que contém:
  - 8 requisições (CRUD completo + busca).  
  - URLs já configuradas para o Render.  
- Basta importar no Postman e clicar em **Send** para executar.

---

## 8️⃣ Melhorias Futuras

- Autenticação de usuários com JWT.  
- Paginação dos resultados de posts.  
- Upload de imagens para cada post.  
- Implementação de testes de integração mais completos.
