module.exports = function(sequelize, DataTypes) {
    var Upgrade = sequelize.define('Upgrade', {
        upgrade: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Upgrade.associates = function(models) {
        Upgrade.belongsTo(models.Racer);
        Upgrade.hasMany(models.SpecialRule);
    }
    return Upgrade;
}