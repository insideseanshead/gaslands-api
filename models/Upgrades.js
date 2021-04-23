module.exports = function(sequelize, DataTypes) {
    var Upgrades = sequelize.define('Upgrades', {
        upgrade: DataTypes.VARCHAR,
        buildSlot: DataTypes.INT,
        cost: DataTypes.INT,
        mishkin: DataTypes.TINYINT(1)
    });

    Upgrades.associates = function(models) {
        
    }
}