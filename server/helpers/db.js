const config = require('./../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

User = require('../modules/users/user.model');
Prestataire = require('../modules/prestataires/prestataire.model');
Garage = require('../modules/garages/garage.model');
Coupon = require('../modules/coupons/coupon.model');
Expert = require('../modules/experts/expert.model');
Fichier = require('../fichiers/fichier.model');
Log = require('../logs/log.model');
Offre = require('../modules/offres/offre.model');

module.exports = db = {};

initialize();

async function initialize() {
    try {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object

    db.User = require('../modules/users/user.model')(sequelize);
    db.Fichier = require('../fichiers/fichier.model')(sequelize);
    db.Log = require('../logs/log.model')(sequelize);
    db.Offre = require('../modules/offres/offre.model')(sequelize);
    db.Prestataire = require('../modules/prestataires/prestataire.model')(sequelize);
    db.Garage = require('../modules/garages/garage.model')(sequelize);
    db.Coupon = require('../modules/coupons/coupon.model')(sequelize);
    db.Expert = require('../modules/experts/expert.model')(sequelize);
    
    // Association ManyToMany


    // sync all models with database
    await sequelize.sync();
    } catch (err) {
        console.log(err);
    }
}    
