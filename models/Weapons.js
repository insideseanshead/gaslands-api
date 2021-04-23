module.exports = function(sequelize, DataTypes) {
    var Upgrade = sequelize.define('Upgrade', {
        upgrade: DataTypes.VARCHAR,
        range: DataTypes.VARCHAR,
        attackDice: DataTypes.VARCHAR,
        buildSlot: DataTypes.INT,
        cost: DataTypes.INT,
        mishkin: DataTypes.TINYINT(1)
    });

    Upgrade.associates = function(models) {
        
    }
}