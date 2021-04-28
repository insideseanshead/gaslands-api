module.exports = function(sequelize, DataTypes) {
    var SpecialRule = sequelize.define('SpecialRule', {
        rule: DataTypes.VARCHAR,
        ammo: DataTypes.INT,
        errata: DataTypes.TEXT
    });

    SpecialRule.associates = function(models) {
        SpecialRule.hasOne(models.Vehicle);
        SpecialRule.hasOne(models.SponsorName);
        SpecialRule.hasOne(models.Weapon);
        SpecialRule.hasOne(models.Upgrade);
        
    }
}