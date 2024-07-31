module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        googleId: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING
        }
    });
    return User;
};
