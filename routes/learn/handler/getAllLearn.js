const express = require('express')
const router = express.Router()
const {Learn} = require('../../../models')

router.get("/learn/",
    async (req, res) => {

        const learn = await Learn.findAll()

        console.log(learn)

        if (learn !== null) {
            res.json({
                status: "success get all learn",
                code: 200,
                data: learn
            })
        } else {
            res.json({
                status: "failed! learn not found",
                code: 404,
            })

        }
    })

module.exports = router

