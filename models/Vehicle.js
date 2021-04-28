module.exports = function(sequelize, DataTypes) {
    var Vehicle = sequelize.define('Vehicle', {
        type: DataTypes.STRING,
        weight: DataTypes.STRING,
        hull: DataTypes.INTEGER,
        handling: DataTypes.INTEGER,
        maxGear: DataTypes.INTEGER,
        crew: DataTypes.INTEGER,
        buildSlots: DataTypes.INTEGER,
        cost: DataTypes.INTEGER,
    });

    Vehicle.associates = function(models) {
        Vehicle.hasOne(models.Racer);
        Vehicle.hasMany(models.SpecialRule);
    }
    return Vehicle;
};