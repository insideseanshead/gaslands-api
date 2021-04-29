module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define('Weapon', {
        weapon: DataTypes.STRING,
        range: DataTypes.STRING,
        attackDice: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Weapon.associates = function(models) {
        Weapon.belongsTo(models.Racer)
        Weapon.hasMany(models.SpecialRule)
    }
    return Weapon;
}