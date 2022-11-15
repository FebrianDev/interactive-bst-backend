const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require("path");
const {registerUser, loginUser} = require("./routes/auth/auth")
const cors = require('cors')
const {createProject, getAllProject, updateProject, getProjectById} = require("./routes/project/project");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(upload.array())
app.use(cookieParser())
app.use(session({secret: "Your secret key"}))
app.use(cors({
    origin: '*'
}))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', registerUser, loginUser, createProject, getAllProject, updateProject, getProjectById)

module.exports = app

/*app.post('/register', (req, res) => {
    if (!req.body.id || !req.body.password) {
        res.status(400)
        res.send("Invalid details!")
    } else {
        Users.filter(function (user) {
            if (user.id === req.body.id) {
                res.render('signup', {
                    message: "User Already Exists! Login or choose another user id"
                })
            }
        })
        const newUser = {id: req.body.id, password: req.body.password}
        Users.push(newUser)
        req.session.user = newUser
    }
})*/

app.listen(6060)