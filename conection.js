const mysql = require("mysql")

const conection = mysql.createConnection(
    {
        host: "localhost",
        user: "user",
        password: "123",
        database: "table"
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
