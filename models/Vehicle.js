module.exports = function(sequelize, DataTypes) {
    var Vehicle = sequelize.define('Vehicle', {
        type: DataTypes.VARCHAR,
        weight: DataTypes.VARCHAR,
        hull: DataTypes.INT,
        handling: DataTypes.INT,
        maxGear: DataTypes.INT,
        crew: DataTypes.INT,
        buildSlots: DataTypes.INT,
        cost: DataTypes.INT,
    });

    Vehicle.associates = function(models) {
        Vehicle.hasOne(models.Racer);
        Vehicle.hasMany(models.SpecialRule);
    }
};