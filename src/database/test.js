const Database = require('./db.js'); 
const saveOrphanage = require('./saveOrphanage.js');

Database.then( async (db) => {
    //inserir dados na tabela 
    await saveOrphanage(db, {
        name: 'Orfanato da Paz', 
        lat:'2.8126364',
        lng:'-60.6712085', 
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.', 
        images: [
            '/images/home.jpg',
            '/images/logo-icon.png'
        ], 
        instruction: 'Venha se sentir a vontade e traga muito amor para dar.', 
        opening_hour: 'Horário de visitas das 8h até 18h', 
        open_on_weekends: '0', 
    })

    //consultar dados na tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages'); 
    console.log(selectedOrphanages); 

    //deletando 
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));

})