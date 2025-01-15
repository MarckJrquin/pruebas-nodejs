const config = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        define: {
            freezeTableName: config.define.freezeTableName
        },
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product.model.js")(sequelize, Sequelize);

async function syncAndSeed() {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
}

syncAndSeed();

module.exports = db;