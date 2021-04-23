module.exports = function(sequelize, DataTypes) {
    var SpecialRules = sequelize.define('SpecialRules', {
        rule: DataTypes.VARCHAR,
        ammo: DataTypes.INT,
        errata: DataTypes.TEXT
    });

    SpecialRules.associates = function(models) {
        
    }
}