var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

const router = require(".");

/* listar PRODUTORAS */ 
router.get('/listar', function(req, res){
    let cmd = 'SELECT id_produtora, nome_produtora, endereco_produtora FROM tb_produtora ORDER BY id_produtora;'; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro);
      } 
      res.render({resultado:listagem}); 
    })
  })

module.exports = router;     