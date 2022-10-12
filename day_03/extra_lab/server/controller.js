require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

let nextEmp = 5

module.exports = {
    getAllClients: (req, res) => {
        sequelize.query(`
        SELECT *
        FROM cc_users AS u
        JOIN cc_clients AS c
        ON u.user_id = c.user_id;
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    getPastAppointments: (req, res) => {
        sequelize.query(`
        SELECT a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name
        FROM cc_appointments AS a
        JOIN cc_emp_appts AS ea on a.appt_id = ea.appt_id
        JOIN cc_employees AS e on e.emp_id = ea.emp_id
        JOIN cc_users AS u ON u.user_id = e.user_id
        WHERE a.approved = true AND a.completed = true
        ORDER BY a.date DESC;
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    getUpcomingAppointments: (req, res) => {
        sequelize.query(`SELECT a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        FROM cc_appointments AS a
        JOIN cc_emp_appts AS ea on a.appt_id = ea.appt_id
        JOIN cc_employees AS e on e.emp_id = ea.emp_id
        JOIN cc_users AS u on e.user_id = u.user_id
        WHERE a.approved = true AND a.completed = false
        ORDER BY a.date DESC;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    getPendingAppointments: (req, res) => {
        sequelize.query(`
        SELECT *
        FROM cc_appointments
        WHERE approved = true
        ORDER BY date DESC;
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
        sequelize.query(`
        UPDATE cc_appointments AS a
        SET a.approved = true
        WHERE a.appt_id = apptId
        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId})
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))
    },

    completeAppointment: (req, res) => {
        let {apptId} = req.body
        sequelize.query(`
        UPDATE cc_appointments AS a
        SET a.completed = true
        WHERE a.appt_id = apptId;
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
};