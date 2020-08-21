const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(conn){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize: conn
        })
    }
}

module.exports = User;
