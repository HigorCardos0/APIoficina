const bd = require("./connection");
const express = require("express");
const app = express();
const body = require("body-parser");

app.use(body.json())

//Busca e exibe todos os clientes cadastrados
app.get("/", function(req,res){
    const SELECT = "SELECT * FROM clientes"
    bd.query(SELECT,(err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send(results)
        };
    });
});

//Busca e exibe usuario selecionado pelo "id"
app.get("/:id", function(req, res){
    const SELECT = "SELECT * FROM clientes WHERE id = ?"
    bd.query(SELECT,[req.params.id],(err, results)=>{
        if(err){
            console.log(err);
        }else{
            res.send(results);
        };
    });
});

//Adiciona um novo usuario com os dados passados no body 
app.post("/novoCliente", function(req, res){
    const insert = "INSERT INTO clientes SET nome = ?, moto = ?, telefone =?";
    const body = req.body
    bd.query(insert,[body.nome, body.moto, body.telefone],(err)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Cliente cadastrado");
        };
    });
});

//Edita um usuario buscado pelo "id"
app.put("/update/:id", function(req, res){
    const update = "UPDATE clientes SET nome = ?, moto = ?, telefone =? WHERE ID = ?";
    const body = req.body
    bd.query(update,[body.nome, body.moto, body.telefone,req.params.id],(err)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Cliente atualizado");
        };
    });
});

//Deleta um usuario buscado pelo "id"
app.delete("/delete/:id", function(req, res){
    const del= "DELETE FROM clientes WHERE ID = ?";
    bd.query(del,[req.params.id],(err)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Cliente deletado');
        };
    });
});


app.listen(8080,()=>{
    console.log(".........Servidor Rodando");
});