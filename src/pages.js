const Database = require("./database/db.js"); //import db
const saveOrphanage = require("./database/saveOrphanage.js"); //import inserts sql

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanageProfile(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id ='${id}'`
      );
      const orphanage = results[0];
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];
      console.log(results);
      console.log(orphanage);
      //if ternario
      orphanage.open_on_weekends == "0"
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return res.render("orphanage-profile", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Error DB - orphanageProfile");
    }
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Error DB - orphanages");
    }
  },

  async createOrphanage(req, res) {
    try {
      return res.render("create-orphanage");
    } catch (error) {}
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    //validando campos preenchidos
    // if(Object.values(fields).includes('')){
    //   return res.send('Preencha todos os campos.')
    // }

    console.log(fields);

    try {
      // SAVE ORPHANAGE
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      }); 

      return res.redirect('/orphanages');
    } catch (error) {
      console.log(error);
      return res.send("Error DB - saveOrphanage");
    }
  },
};
