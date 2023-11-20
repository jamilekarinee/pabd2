var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');


router.get('/add', function(req, res ){ /* post vai incluir algo */ 
    res.render('filmes_add', {resultado: {}}); 
});

/* adicionar FILMES */
router.post('/add', function(req, res ){
  let nome      = req.body.nome; 
  let produtora = req.body.produtora; 
  let horas     = req.body.horas; 
  let genero    = req.body.genero; 
  let cmd = 'INSERT INTO tbfilme (nome_filme, id_produtora, horas_filme, id_genero VALUES (?, ?, ?, ?)'
  db.query(cmd, [nome, produtora, horas, genero], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.redirect('/filmes/listar'); /* de listar_filmes para FILMES/LISTAR*/ 
  })
});

/* listar FILMES */ 
router.get('/listar', function(req, res ){
  let cmd = "SELECT id_filme, nome_filme, nome_produtora, horas_filme , nome_genero ";
  cmd = cmd + "FROM tb_filme " ;
  cmd = cmd + "INNER JOIN tb_produtora "; 
  cmd = cmd + "ON tb_produtora.Id_Produtora = tb_filme.Id_Produtora "; 
  cmd = cmd + "INNER JOIN tb_genero "; 
  cmd = cmd + "ON tb_genero.Id_Genero = tb_filme.Id_Genero "; 
  cmd = cmd + "ORDER BY id_filme; "; 
  db.query(cmd, [], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('filmes_lista', {resultado: listagem}); 
  })
});

/* editar FILMES */ 
router.get('/edit/:id', function(req, res ){
  let id = req.params.id; 
  let cmd = "SELECT id_filme, nome_filme, nome_produtora, horas_filme , id_genero FROM tb_filme WHERE id_filme = ?; ";
  db.query(cmd, [id], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('filmes_add', {resultado: listagem[0]}); 
  })
});

module.exports = router; 
