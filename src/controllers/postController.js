const Post = require("../models/Post");
const { Op } = require("sequelize");

// ➤ Criar novo post
exports.createPost = async (req, res) => {
  try {
    const { titulo, conteudo, autor } = req.body;

    if (!titulo || !conteudo || !autor) {
      return res
        .status(400)
        .json({ erro: "Todos os campos são obrigatórios." });
    }

    const novoPost = await Post.create({ titulo, conteudo, autor });
    res.status(201).json(novoPost);
  } catch (error) {
    console.error("Erro ao criar post:", error);
    res.status(500).json({ erro: "Erro interno ao criar post." });
  }
};

// ➤ Listar todos os posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar posts." });
  }
};

// ➤ Buscar post por ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ erro: "Post não encontrado." });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar post." });
  }
};

// ➤ Atualizar post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ erro: "Post não encontrado." });
    }
    await post.update(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar post." });
  }
};

// ➤ Deletar post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ erro: "Post não encontrado." });
    }
    await post.destroy();
    res.json({ mensagem: "Post excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao excluir post." });
  }
};

// ➤ Buscar posts por palavra-chave
exports.searchPosts = async (req, res) => {
  try {
    const termo = req.query.q;
    if (!termo) {
      return res.status(400).json({ erro: "Informe um termo de busca." });
    }
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { titulo: { [Op.like]: `%${termo}%` } },
          { conteudo: { [Op.like]: `%${termo}%` } },
        ],
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar posts." });
  }
};
