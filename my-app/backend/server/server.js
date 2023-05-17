const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const db = require('../db/index');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../auth/passport-config');
const session = require('express-session');
const cors = require('cors');
const reactClientURL = 'http://localhost:3000'; 
var currentUser 
app.use(cors({
  origin: reactClientURL, 
  credentials: true,
})
)

app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

app.get("/courses", async (req, res)=>{
  const courses = await db.getUserCourses(currentUser)
  res.json({ message: "Success", courses: courses  })
})
app.get("/getAllCourses", async (req, res)=>{
  const courses = await db.getAllNonUserCourses(currentUser)
  res.json({ message: "Success", courses: courses  })
})

app.get("/getUserData", async (req, res)=>{
  const userData = await db.getAllUserData(currentUser)
  res.json({ message: "Got UserData", UD: userData  })
})



app.post("/updateUser", async (req, res)=>{
  const userData = await db.UpdateUser(currentUser, req.body.fname,req.body.lname,req.body.email,req.body.phoneNumber,req.body.address)
  res.json({ message: "Updated User", })
})

app.post("/joinCourse", async (req, res)=>{
  console.log(req.body.classId)
  const courses = await db.joinTheClass(currentUser, req.body.classId)
  res.json({ message: "Success" })
})

// app.post("/addUser", (req, res) => {
//   console.log("post add User: ", ` ${req.body.username} `);
//   db.addUser(req.body.username, req.body.firstname, req.body.lastname, req.body.email, req.body.password)
//   res.json({ message: "Success" })
// }) 

app.post("/addUser", db.addUser)

app.post('/login', 
passport.authenticate('local', {}), (req,res) => {
  currentUser = req.user.username
  res.json({ message: "Success", "isadmin": req.user.isadmin })
}) 


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});