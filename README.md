📌 Tech Challenge - API de Blogging (Fase 2)
🚀 Sobre o Projeto
Esta aplicação é parte do Tech Challenge - Fase 2, cujo objetivo é desenvolver uma API REST para gerenciamento de postagens de professores, permitindo criar, listar, atualizar, excluir e buscar posts por palavra-chave, utilizando Node.js, Express e MySQL.

O sistema foi projetado para possibilitar que docentes publiquem suas aulas e conteúdos de forma centralizada, acessível e escalável para alunos da rede pública.

🛠️ Tecnologias Utilizadas
Node.js - Plataforma para execução do JavaScript no backend

Express.js - Framework para construção de APIs REST

MySQL - Banco de dados relacional

Sequelize ORM - Mapeamento objeto-relacional para Node.js

Docker - Containerização da aplicação e banco de dados

Postman - Testes manuais da API

⚙️ Instalação e Configuração

🔹 1. Clonar o repositório
git clone https://github.com/dev-pedrosantos/tech-challenge-blog.git
cd tech-challenge-blog

🔹 2. Instalar dependências
npm install

🔹 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto:
DB_HOST=localhost
DB_USER=root
DB_PASS=123456
DB_NAME=techchallenge
DB_PORT=3306
PORT=3000

⚠️ Ajuste DB_PASS conforme sua senha do MySQL.⚠️

🔹 4. Criar o banco de dados
No MySQL Workbench ou terminal:
CREATE DATABASE techchallenge;

🔹 5. Rodar a aplicação sem Docker
node src/app.js

A API estará acessível em:
http://localhost:3000/api/posts

🐳 Rodando com Docker (opcional)
Para subir o projeto e o banco MySQL via Docker:

Certifique-se de que o Docker Desktop está rodando.

Execute:
docker compose up --build

Acesse a API em:
http://localhost:3000/api/posts

Para parar:
docker compose down


📡 Endpoints da API
1️⃣ Listar todos os posts
GET /api/posts

Resposta:
  {
    "id": 1,
    "titulo": "Minha primeira aula",
    "conteudo": "Conteúdo de exemplo",
    "autor": "Prof. João",
    "createdAt": "2025-08-05T12:00:00.000Z",
    "updatedAt": "2025-08-05T12:00:00.000Z"
  }

2️⃣ Buscar um post pelo ID
GET /api/posts/:id

3️⃣ Criar um novo post
POST /api/posts

4️⃣ Atualizar um post
PUT /api/posts/:id

5️⃣ Excluir um post
DELETE /api/posts/:id

6️⃣ Buscar posts por palavra-chave
GET /api/posts/search?q=matemática

🧪 Testando no Postman
Abra o Postman.

Crie requisições para cada endpoint acima.

Use o método correto (GET, POST, PUT, DELETE).

Envie JSON no corpo da requisição para POST e PUT.

Observe a resposta em formato JSON.

📦 Estrutura de pastas
tech-challenge-blog/
│── src/

│   ├── config/

│   │   └── db.js

│   ├── controllers/

│   │   └── postController.js

│   ├── models/

│   │   └── Post.js

│   ├── routes/

│   │   └── postRoutes.js

│   └── app.js

│
├── Dockerfile

├── docker-compose.yml

├── package.json

├── README.md

└── .env (não versionado)


👨‍💻 Pedro Lucas Walter Barbosa dos Santos
Desenvolvido para o Tech Challenge - Fase 2 como parte do curso, visando integrar conhecimentos adquiridos em Node.js, SQL, APIs REST, Docker e práticas de desenvolvimento colaborativo.













