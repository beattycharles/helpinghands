const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection') //**Config

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // volunteerEvent_id:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     // autoIncrement: true,
    //     primaryKey: true,
    //},
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    birth_date:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
      },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [12],
      },
    },
      location_state:{
        type: DataTypes.ENUM,
        values: [
            "AL",
            "AK",
            "AZ",
            "AR",
            "CA",
            "CO",
            "CT",
            "DE",
            "DC",
            "FL",
            "GA",
            "HI",
            "ID",
            "IL",
            "IN",
            "IA",
            "KS",
            "KY",
            "LA",
            "ME",
            "MD",
            "MA",
            "MI",
            "MN",
            "MS",
            "MO",
            "MT",
            "NE",
            "NV",
            "NH",
            "NJ",
            "NM",
            "NY",
            "NC",
            "ND",
            "OH",
            "OK",
            "OR",
            "PA",
            "RI",
            "SC",
            "SD",
            "TN",
            "TX",
            "UT",
            "VT",
            "VI",
            "VA",
            "WA",
            "WV",
            "WI",
            "WY"],
            allowNull: false,
    },
    location_zipcode:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    // conditional statement to prevent duplicate user accounts

},
    {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'}
);

module.exports = User;