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
        Weapon.hasMany(models.SpecialRule)
        Weapon.belongsTo(models.Vehicle)
    }
    return Weapon;
}