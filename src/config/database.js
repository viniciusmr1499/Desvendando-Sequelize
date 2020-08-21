module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        underscored: true,
        timestamp: true,
    }
};
