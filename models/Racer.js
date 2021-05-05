module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.STRING,
        // Store Vehicle Type
        vehicleType: DataTypes.STRING,
        // Store Weight
        weight: DataTypes.STRING,
        // Store Hull Amount
        hull: DataTypes.INTEGER,
        // Store Handling Score
        handling: DataTypes.INTEGER,
        // Store Max Gear
        maxGear: DataTypes.INTEGER,
        // Store Crew Amount
        crew: DataTypes.INTEGER,
        // Store Number of Build Slots
        buildSlots: DataTypes.INTEGER,
        // Store Special Rules
        specialRules: DataTypes.TEXT,
        // Store Total Cost
        totalCost: DataTypes.INTEGER
    });

    Racer.associate = function(models) {
        Racer.belongsTo(models.Vehicle);
        Racer.belongsTo(models.Weapon);
        Racer.belongsTo(models.Upgrade);
    }

    return Racer;
};