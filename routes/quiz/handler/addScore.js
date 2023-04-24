const express = require('express')
const router = express.Router()
const Validator = require('fastest-validator')
const {Quiz} = require('../../../models')

const v = new Validator()

//Create data
router.post('/quiz', async (req, res) => {

    const schema = {
        id_user: 'string|empty:false',
        score: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const data = {
        id_user: req.body.id_user,
        score: req.body.score,
    }

    const addScore = await Quiz.create(data)

    return res.status(201).json({
        message: 'success',
        code: 201,
        data: {
            id: addScore.id
        }
    })
})

module.exports = router