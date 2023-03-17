require("dotenv").config();
const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
});

pool.connect();
exports.getLogin = (req, res) => {
    pool.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

exports.getUserCourses = async (username) => {
    console.log(username)
    const results = await pool.query('SELECT courses from users where username = $1', [username])
    console.log(results)
    let res = results.rows[0].courses.split(',')
    let coursesIntArray = []
    for(let x = 0; x<res.length; x++){
        console.log(res[x])
        var bob = parseInt(res[x])
        const cla = await pool.query('SELECT * from courses where id in($1)', [bob])
        coursesIntArray.push(cla)
    }
    
    return coursesIntArray
}



exports.getCourses = (req, res) => {
    pool.query("SELECT * FROM courses", (err, results) => {
        // if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}
exports.authUserByName = async (username) => {
    const results = await
    pool.query('SELECT * from users where username = $1', [username]);
    console.log(results.rows[0]);
    return results.rows[0];
}



exports.addUser = async (req, res) => {
    const username = req.body.username
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    const values = [username, firstname, lastname, email, password, false]
    const query = "insert into users (username, email, hash ,firstName, lastName, isadmin) VALUES ($1, $4, $5, $2, $3, $6)"
    const result = await
    pool.query(query, values)
    res.json({ message: "Sucess" })
}
