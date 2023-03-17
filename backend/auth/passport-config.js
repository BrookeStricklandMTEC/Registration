const LocalStrategy = require("passport-local").Strategy
const db = require('../db/index')
const bcrypt = require('bcrypt')
const passport = require('passport')
function initialize(passport) {
  const authenticateUser = async (username, password, done) => {
    console.log(username);
    const user = await db.authUserByName(username)
    if (!user) return done(null, false)
    user.hash = bcrypt.hashSync(password, 10)
    const isMatch = bcrypt.compareSync(password, user.hash)
    if (!isMatch) return done(null, false);
    else return done(null, user);
  }


  passport.use(
    new LocalStrategy({ 
      usernameField: "username",
      passwordField: "password",
    },
      authenticateUser
    )
  )
  passport.serializeUser((user, done) => {
    console.log('serial', user)
    done(null, user)
  })
  passport.deserializeUser((user, done) => {
    return done(null, user)
  })
}

module.exports = initialize;