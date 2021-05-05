module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define('Weapon', {
        weapon: DataTypes.STRING,
        range: DataTypes.STRING,
        attackDice: DataTypes.STRING,
        specialRules: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Weapon.associate = function(models) {
        Weapon.hasMany(models.Racer)
    }
    return Weapon;
}