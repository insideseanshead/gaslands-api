module.exports = function(sequelize, DataTypes) {
    var SponsorName = sequelize.define('SponsorName', {
        name: DataTypes.VARCHAR
    });

    SponsorName.associates = function(models) {
        
    }
}