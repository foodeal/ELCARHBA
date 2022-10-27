const { DataTypes } = require('sequelize');
module.exports = Prestataire;

function Prestataire(sequelize) {
    const attributes = {
        nom_prestataire: { type: DataTypes.STRING, allowNull: false },
        prenom_prestataire: { type: DataTypes.STRING, allowNull: false },
        email_prestataire: { type: DataTypes.STRING, allowNull: false },
        tel_prestataire: { type: DataTypes.STRING, allowNull: false },
        raison_sociale: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        pays_prestataire: { type: DataTypes.STRING, allowNull: false },
        ville_prestataire: { type: DataTypes.STRING, allowNull: false },
        adresse_prestataire: { type: DataTypes.STRING, allowNull: false },
        service_prestataire: { type: DataTypes.STRING, allowNull: false },
        site_web: { type: DataTypes.STRING, allowNull: false },
        lien_fb: { type: DataTypes.STRING, allowNull: false },
        lien_insta: { type: DataTypes.STRING, allowNull: false },
        registre_commerce: { type: DataTypes.STRING, allowNull: false },
        cin_geron: { type: DataTypes.STRING, allowNull: false },
        contrat_condition: { type: DataTypes.STRING, allowNull: false },
        motdepasse: { type: DataTypes.STRING, allowNull: false }
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

    return sequelize.define('Prestataire', attributes, options);
}