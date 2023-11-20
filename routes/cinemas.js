var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* listar CINEMAS */ 
router.get('/listar', function(req, res ){
    let cmd = "SELECT id_cinema, nome_cinema, endereco_produtora ORDER BY id_cinema ";
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.render('cinemas_lista', {resultado: listagem}); 
    })
  });
  
/* adicionar CINEMAS */
router.post('/add', function(req, res ){
    let nome      = req.body.nome; 
    let endereco = req.body.endereco; 
    let cmd = 'INSERT INTO tb_filme (nome_cinema, endereco_cinema VALUES (?, ?)' // de tbfilme pra TB_FILME!! 
    db.query(cmd, [nome, endereco], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.redirect('/cinemas_lista'); 
    })
  }); 
  
    
module.exports = router; 
