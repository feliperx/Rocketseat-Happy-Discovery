const express = require('express'); // importando express 
const path = require('path');
const pages = require('./pages.js');

const server = express(); //iniciando express 

server
    //utizando os arquivos estaticos 
    .use(express.static('public'))
    
    //configura template engine (hbs) 
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs') 

    //for use body.req 
    .use(express.urlencoded({extended: true}))

    //rotas 
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage-profile', pages.orphanageProfile)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor a porta 
server.listen(5500);