module.exports = function(sequelize, DataTypes) {
    var Vehicle = sequelize.define('Vehicle', {
        type: DataTypes.STRING,
        weight: DataTypes.STRING,
        hull: DataTypes.INTEGER,
        handling: DataTypes.INTEGER,
        maxGear: DataTypes.INTEGER,
        crew: DataTypes.INTEGER,
        buildSlot: DataTypes.INTEGER,
        specialRules: DataTypes.STRING,
        cost: DataTypes.INTEGER,
    });

    Vehicle.associate = function(models) {
       Vehicle.hasMany(models.Racer)
    }
    return Vehicle;
};