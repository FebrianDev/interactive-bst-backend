const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require("path")
const {registerUser, loginUser, getUser} = require("./routes/auth/auth")
const {addScore, getScore} = require("./routes/quiz/quiz")
const cors = require('cors')
const {createProject, getAllProject, updateProject, getProjectById} = require("./routes/project/project")
const {add} = require("nodemon/lib/rules");
const enforce = require('express-sslify')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(upload.array())
app.use(cookieParser())
app.use(session({secret: "Your secret key"}))
app.use(cors({
    origin: '*'
}))

//app.use(enforce.HTTPS());

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api',
    /*Auth*/
    registerUser, loginUser, getUser,
    /*Project*/
    createProject, getAllProject, updateProject, getProjectById,
    /*Quiz*/
    addScore, getScore
)

module.exports = app

app.listen(6060)