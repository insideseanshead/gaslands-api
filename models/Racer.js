module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.STRING
    });

    Racer.associate = function(models) {
        Racer.hasOne(models.Vehicle);
        Racer.belongsTo(models.RacingTeam);
    }

    return Racer;
};