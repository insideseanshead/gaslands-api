module.exports = function(sequelize, DataTypes) {
    var SponsorName = sequelize.define('SponsorName', {
        name: DataTypes.STRING
    });

    SponsorName.associate = function(models) {
        SponsorName.hasMany(models.Racer)
        SponsorName.belongsTo(models.RacingTeam)
        // SponsorName.belongsTo(models.RacingTeam);
        // SponsorName.hasMany(models.SpecialRule);
        // SponsorName.hasMany(models.Racer);
    }
    return SponsorName;
};