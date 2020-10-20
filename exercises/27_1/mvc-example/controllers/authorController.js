const Author = require('../models/authorModel');
const authorService = require('../services/authorService');

const listAuthors = async (_req, res) => {
     const authors = await Author.getAll();

  // res.render('authors/index', { authors });
  res.json(authors)
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  // res.render('authors/show', { author });
  res.json(author);
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  // if (!Author.isValid(firstName, middleName, lastName)) {
  //   // return res.render('authors/new', { message: 'Dados inválidos' });
  //   return res.json({ message: 'Dados inválidos' });
  // }

  const newAuthor = await authorService.create(firstName, middleName, lastName);
  // res.redirect('authors');
  res.json({ newAuthor: newAuthor, message: 'Autor criado' });
};

module.exports = {
  listAuthors,
  showAuthor,
  createAuthor,
};
