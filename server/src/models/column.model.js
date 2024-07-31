module.exports = (sequelize, Sequelize) => {
    const Column = sequelize.define('column', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Column;
};
