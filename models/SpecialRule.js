module.exports = function(sequelize, DataTypes) {
    var SpecialRule = sequelize.define('SpecialRule', {
        rule: DataTypes.STRING,
        ammo: DataTypes.INTEGER,
        errata: DataTypes.TEXT
    });

    SpecialRule.associates = function(models) {
        SpecialRule.belongsTo(models.Vehicle);
        SpecialRule.belongsTo(models.SponsorName);
        SpecialRule.belongsTo(models.Weapon);
        SpecialRule.belongsTo(models.Upgrade);
        
    }
    return SpecialRule;
}