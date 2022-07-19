const { DataTypes, BelongsTo } = require('sequelize');
module.exports = Fichier;

function Fichier(sequelize) {
    const attributes = {
        fiche: { type: DataTypes.INTEGER, allowNull: true, constraint: false },
        analyse_matiere: { type: DataTypes.INTEGER, allowNull: true, constraint: false },
        url: { type: DataTypes.STRING, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: true },
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


    return sequelize.define('Fichier', attributes, options);
}