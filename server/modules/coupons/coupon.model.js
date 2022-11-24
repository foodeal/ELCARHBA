const { DataTypes, BelongsTo } = require('sequelize');
module.exports = Coupon;

function Coupon(sequelize) {
    const attributes = {
        titre_coupon: { type: DataTypes.STRING, allowNull: false },
        pourcentage_coupon: { type: DataTypes.STRING, allowNull: false },
        date_valide_coupon: { type: DataTypes.DATEONLY, allowNull: false },      
        condition_coupon: { type: DataTypes.TEXT, allowNull: true },
        prix_final: { type: DataTypes.FLOAT, allowNull: true },
        argent_gagner: { type: DataTypes.FLOAT, allowNull: true },
        prestataire_id: { type: DataTypes.INTEGER, allowNull: false, references: { model : 'Prestataires', key: 'id' } },
        offre_id: { type: DataTypes.INTEGER, allowNull: false, references: { model : 'Offres', key: 'id' } }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: [''] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        },
    };


    return sequelize.define('Coupon', attributes, options);
}