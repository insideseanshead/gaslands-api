module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define('Weapon', {
        Weapon: DataTypes.VARCHAR,
        range: DataTypes.VARCHAR,
        attackDice: DataTypes.VARCHAR,
        buildSlot: DataTypes.INT,
        cost: DataTypes.INT,
        mishkin: DataTypes.TINYINT(1)
    });

    Weapon.associates = function(models) {
        Weapon.hasOne(models.Racer)
        Weapon.hasMany(models.SpecialRule)
    }
    return Weapon;
}