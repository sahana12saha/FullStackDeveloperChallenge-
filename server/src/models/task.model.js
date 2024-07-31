module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define('task', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        columnId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'columns',
                key: 'id'
            }
        }
    });
    return Task;
};
