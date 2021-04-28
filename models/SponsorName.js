module.exports = function(sequelize, DataTypes) {
    var SponsorName = sequelize.define('SponsorName', {
        name: DataTypes.STRING
    });

    SponsorName.associates = function(models) {
        SponsorName.belongsTo(models.RacingTeam);
        SponsorName.hasMany(models.SpecialRule);
        SponsorName.hasMany(models.Racer);
    }
    return SponsorName;
};