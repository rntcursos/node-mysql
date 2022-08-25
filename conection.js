const mysql = require("mysql")

const conection = mysql.createConnection(
    {
        host: "localhost",
        user: "rnt",
        password: "123",
        database: "bank"
    },

    );

conection.connect(function (err){
    if (err){
        console.log(err)
    }else{
        console.log("Conectado!")
    }
});

module.exports = conection;