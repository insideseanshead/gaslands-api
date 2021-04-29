module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define('Weapon', {
        Weapon: DataTypes.STRING,
        range: DataTypes.STRING,
        attackDice: DataTypes.STRING,
        buildSlot: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
        mishkin: DataTypes.INTEGER
    });

    Weapon.associate = function(models) {
        Weapon.belongsTo(models.Racer)
        Weapon.hasMany(models.SpecialRule)
    }
    return Weapon;
}