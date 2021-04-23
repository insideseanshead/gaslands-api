module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.VARCHAR
    });

    RacingTeam.associates = function(models) {
        
    }
}