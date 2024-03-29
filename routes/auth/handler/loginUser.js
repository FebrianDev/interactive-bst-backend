const bcrypt = require('bcrypt')
const {User} = require('../../../models')
const Validator = require('fastest-validator')

const express = require('express')
const router = express.Router()

const v = new Validator()

router.post('/login', async (req, res) => {

    const schema = {
        email: 'email|empty:false',
        password: 'string|min:6'
    }

    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (!user) {
        return res.json({
            status: 'error',
            message: 'Incorrect Email or Password'
        })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password)
    if (!isValidPassword) {
        return res.json({
            status: 'error',
            message: 'Incorrect Email or Password'
        })
    }

    res.json({
        status: 'success',
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
})

module.exports = router
