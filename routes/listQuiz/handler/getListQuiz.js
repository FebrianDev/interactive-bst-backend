const express = require('express')
const router = express.Router()
const {ListQuiz} = require('../../../models')
const {Sequelize} = require("sequelize")

router.get("/list-quiz/",
    async (req, res) => {

        const listQuiz = await ListQuiz.findAll({ order: Sequelize.literal('rand()')})

        console.log(listQuiz)

        if (listQuiz !== null) {
            res.json({
                status: "success get all list Quiz",
                code: 200,
                data: listQuiz
            })
        } else {
            res.json({
                status: "failed! Quiz not found",
                code: 404,
            })

        }
    })

module.exports = router

