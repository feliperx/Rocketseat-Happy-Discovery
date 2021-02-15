const Database = require('sqlite-async'); 


function execute(db){ 

    //criando tabelas em SQL 
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT, 
            about TEXT, 
            whatsapp TEXT, 
            images TEXT, 
            instructions TEXT,
            opening_hours TEXT, 
            open_on_weekends TEXT
        );

    `)
}

//then - acao depois de acabada a acao anterior (promisse)
module.exports = Database.open(__dirname + '/database.sqlite').then(execute); //criando o db
