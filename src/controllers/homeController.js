const Contato = require('../models/contatoModel');

exports.index = async(req, res) => {
  const contatos = await Contato.searchContatos();
  res.render('index', { contatos });
  return;
};