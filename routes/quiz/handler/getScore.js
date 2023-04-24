const express = require('express')
const router = express.Router()
const {Quiz} = require('../../../models')

router.get("/quiz/:id_user", async (req, res) => {

    const idUser =req.params.id_user
    console.log(idUser)
    const quiz = await Quiz.findAll({
        where: {
            id_user:idUser
        }
    })

    if (quiz !== null) {
        res.json({
            status: "success get project by id",
            code: 200,
            data: quiz
        })
    } else {
        res.json({
            status: "failed! project not found",
            code: 404,
        })

    }
})

module.exports = router

