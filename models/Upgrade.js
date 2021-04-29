module.exports = function(sequelize, DataTypes) {
    var Upgrade = sequelize.define('Upgrade', {
        upgrade: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Upgrade.associate = function(models) {
        Upgrade.hasMany(models.SpecialRule);
        Upgrade.belongsTo(models.Vehicle);
    }
    return Upgrade;
}