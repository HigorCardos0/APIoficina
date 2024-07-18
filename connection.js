const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "oficina"  
    }
);

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Servidor Conectado..");
    };
});

connection.query("SELECT * FROM clientes",(err, results, fields)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
    };
});  

module.exports = connection;