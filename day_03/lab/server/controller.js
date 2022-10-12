const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
//mocking logged in users
const userId = 4;
const clientId = 3;

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`
        SELECT * FROM cc_clients AS c
        JOIN cc_users AS u 
        ON u.user_id = c.user_id
        WHERE u.user_id = ${userId}
        `)
        .then(response => {
            console.log(response);
            res.send(response[0]); //response[0][0]
        })
        .catch(err => console.log(err));
    }
}