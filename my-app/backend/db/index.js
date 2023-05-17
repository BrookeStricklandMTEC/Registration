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


exports.getAllUserData = async (username) => {
    const results = await pool.query('SELECT * from users where username = $1', [username])
    console.log(results.rows[0])
    return results.rows[0]
}

exports.joinTheClass = async (username, classID) => {
    const results = await pool.query('SELECT courses from users where username = $1', [username])
    var bob
    if (results.rows[0].courses !== null) {
        bob = results.rows[0].courses + "," + classID
    } else {
        bob = classID
    }
    const cla = await pool.query("update users set courses =$2 where username = $1", [username, bob])
    return
}


exports.getUserCourses = async (username) => {
    console.log(username)
    const results = await pool.query('SELECT courses from users where username = $1', [username])

    let coursesIntArray = []
    console.log(results.rows[0])
    if (results.rows[0].courses !== null) {
        let res = results.rows[0].courses.split(',')
        for (let x = 0; x < res.length; x++) {
            var bob = parseInt(res[x])
            const cla = await pool.query('SELECT * from courses where id in($1)', [bob])
            coursesIntArray.push(cla)
        }
    }

    return coursesIntArray
}


exports.getAllNonUserCourses = async (username) => {
    const result = await pool.query('SELECT courses from users where username = $1', [username])
    console.log("bob")
    console.log(result)
    if (result.rows[0].courses !== null) {
        let spliter = result.rows[0].courses.split(',')
        var notclass = "SELECT * from courses where "
        var x = 1
        var bob = []
        while (x < spliter.length + 1) {
            if (x !== 1) {
                notclass = notclass + "and "
            }
            notclass = notclass + "id != ($" + x + ") "
            bob.push(parseInt(spliter[x - 1]))
            console.log(bob)
            x++

        }
    } else {
        var notclass = "SELECT * from courses"
    }
    const cla = await pool.query(notclass, bob)
    return cla
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

exports.authUserByName = async (username,) => {
    const results = await pool.query('SELECT * from users where username = $1', [username]);
    console.log(results.rows[0]);
    return results.rows[0];
}


exports.UpdateUser = async (username, firstname, lastname, email, phonenumber, address) => {
    const results = await pool.query('SELECT * from users where username = $1', [username]);

    if (firstname !== results.rows[0].firstname) {
        const firstNameResults = await pool.query('update users set firstname = $1 where username = $2', [firstname, username])
    }
    if (lastname !== results.rows[0].lastname) {
        const lastNameResults = await pool.query('update users set lastname = $1 where username = $2', [lastname, username])
    }
    if (email !== results.rows[0].email) {
        const emailResults = await pool.query('update users set email = $1 where username = $2', [email, username])
    }
    if (phonenumber !== results.rows[0].cellphone) {
        const phoneResults = await pool.query('update users set cellphone = $1 where username = $2', [phonenumber, username])
    }
    if (address !== results.rows[0].address) {
        const phoneResults = await pool.query('update users set address = $1 where username = $2', [address, username])
    }


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


// module.exports = { pool };
