module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        googleId: DataTypes.STRING,
        displayName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        image: DataTypes.STRING

    });

    User.associate = function(models) {
        User.belongsTo(models.RacingTeam);
    }

    return User;
};