module.exports = function(sequelize, DataTypes) {
    var Upgrade = sequelize.define('Upgrade', {
        upgrade: DataTypes.STRING,
        specialRules: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Upgrade.associate = function(models) {
        Upgrade.hasMany(models.Racer)
    }
    return Upgrade;
}