/**
 * Created by cesarcruz on 5/7/15.
 */

module.exports = function(sequelize, DataTypes){

    var Synchronization = sequelize.define('Synchronization', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lastSynchronization : {
            type : DataTypes.DATE
        },
        createdAt : {
            type : DataTypes.DATE
        },
        updatedAt : {
            type : DataTypes.DATE
        }
    }, {
        timestamps : true
    });

    return Synchronization;
}