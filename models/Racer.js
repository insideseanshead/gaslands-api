module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.VARCHAR
    });

    Racer.associates = function(models) {
        
    }
}