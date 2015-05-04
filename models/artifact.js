/**
 * Created by cesarcruz on 3/10/15.
 * Object Model
 */

module.exports = function(sequelize, DataTypes) {

    var Artifact =  sequelize.define('Artifact', {
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
            notEmpty: true
        },
        medium : {
            type : DataTypes.STRING,
            notEmpty: true
        },
        classification : {
            type : DataTypes.STRING,
            notEmpty: true
        },
        attribution : {
            type : DataTypes.STRING
        },
        type : {
            type : DataTypes.STRING
        },
        dimensions : {
            type : DataTypes.STRING,
            notEmpty: true
        },
        dated : {
            type : DataTypes.STRING
        },
        period : {
            type : DataTypes.STRING
        },
        culture : {
            type : DataTypes.STRING
        },
        department : {
            type : DataTypes.STRING
        },
        objectNumber : {
            type : DataTypes.STRING
        },
        image : {
            type : DataTypes.STRING(1000),
            allowNull : false,
            notEmpty: true
        },
        ArtistId : {
            type : DataTypes.INTEGER
        },
        qrcode : {
            type : DataTypes.STRING(1000),
            isUrl : true
        },
        ExhibitionId : {
            type : DataTypes.INTEGER
        },
        interactions : {
            type : DataTypes.INTEGER,
            defaultValue : 0
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

    return Artifact;
};

