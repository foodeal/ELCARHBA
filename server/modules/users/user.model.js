const { DataTypes } = require('sequelize');
module.exports = User;

function User(sequelize) {
    const attributes = {
        nom_prenom: { type: DataTypes.STRING, allowNull: false },
        date_debut: { type: DataTypes.DATEONLY, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        tel_utilisateur: { type: DataTypes.STRING, allowNull: false },
        occupation: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        pays_user: { type: DataTypes.STRING, allowNull: false },
        ville_user: { type: DataTypes.STRING, allowNull: false },
        adresse_user: { type: DataTypes.STRING, allowNull: false },
        pays_user: { type: DataTypes.STRING, allowNull: false },
        motdepasse: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['motdepasse'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}