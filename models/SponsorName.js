module.exports = function(sequelize, DataTypes) {
    var SponsorName = sequelize.define('SponsorName', {
        name: DataTypes.STRING
    });

    SponsorName.associate = function(models) {
        SponsorName.belongsTo(models.RacingTeam)
        
    }
    return SponsorName;
};