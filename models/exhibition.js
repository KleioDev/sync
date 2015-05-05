/**
 * Created by cesarcruz on 3/10/15.
 * Exhibition Model
 */

module.exports = function(sequelize, DataTypes) {

    var Exhibition = sequelize.define('Exhibition', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false,
            notEmpty: true
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        image : {
          type : DataTypes.STRING(1000),
            notEmpty: true
        },
        active : {
            type : DataTypes.BOOLEAN,
            defaultValue : true
        },
        tmsID : {
            type : DataTypes.INTEGER
        },
        createdAt : {
            type : DataTypes.DATE
        },
        updatedAt : {
            type : DataTypes.DATE
        }
    }, {
        timestamps: true,
        paranoid : true
    });

    return Exhibition;
};
