const { DataTypes, BelongsTo } = require('sequelize');
module.exports = Garage;

function Garage(sequelize) {
    const attributes = {
        nom_garage: { type: DataTypes.STRING, allowNull: true },
        heures_travail: { type: DataTypes.STRING, allowNull: true },
        jours_travail: { type: DataTypes.STRING, allowNull: true },
        adresse_garage: { type: DataTypes.STRING, allowNull: true },
        contact_garage: { type: DataTypes.STRING, allowNull: true },
        description_garage: { type: DataTypes.TEXT, allowNull: true }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: [''] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };


    return sequelize.define('Garage', attributes, options);
}