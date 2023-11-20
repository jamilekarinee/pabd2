var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* LISTAR */
router.get('/listar', function(req, res ){
  let cmd = "SELECT IdAutor, NoAutor, NoNacionalidade ";
  cmd = cmd + "FROM TbAutor AS a INNER JOIN TbNacionalidade AS n " ;
  cmd = cmd + "ON a.IdNacionalidade = n.IdNacionalidade ORDER BY NoAutor;"; 
  db.query(cmd, [], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('autores_lista', {resultado: listagem}); 
  })
});

/* LISTAR dbjamile*/
router.get('/listar', function(req, res ){
  let cmd = "SELECT IdAutor, NoAutor, NoNacionalidade ";
  cmd = cmd + "FROM TbAutor AS a INNER JOIN TbNacionalidade AS n " ;
  cmd = cmd + "ON a.IdNacionalidade = n.IdNacionalidade ORDER BY NoAutor;";  
  db.query(cmd, [], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('autores_lista', {resultado: listagem}); 
  })
});


router.get('/add', function(req, res ){ /* post vai incluir algo */ 
    res.render('autores-add.ejs', {resultado: {}}); 
});

/* vai do \autor para o cadastro.ejs */
router.get('/autor', function(req, res){
  res.render('cadastro', {cab: 'Cadastro de Autores'}); /* AUTORES */ 
}); 


module.exports = router; 