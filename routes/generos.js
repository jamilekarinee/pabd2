var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* listar GÊNERO */ 
router.get('/listar_generos', function(req, res ){
    let cmd = "SELECT id_genero, nome_genero "; 
    cmd = cmd + "FROM tb_genero;"; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.render('generos_lista', {resultado: listagem}); 
    })
  });

  router.get('/listar', function(req, res ){
    let cmd = "SELECT id_genero, nome_genero "; 
    cmd = cmd + "FROM tb_genero;"; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.json({resultado: listagem}); 
    })
  });
  
module.exports = router;   