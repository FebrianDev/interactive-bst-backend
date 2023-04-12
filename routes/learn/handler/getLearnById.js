const express = require('express')
const router = express.Router()
const {Learn} = require('../../../models')

router.get("/learn/:id_learn", async (req, res) => {

    const idLearn = req.params.id_learn
    console.log(idLearn)
    const learn = await Learn.findOne({
        where: {
            id: idLearn
        }
    })

    console.log(learn)

    if (learn !== null) {
        res.json({
            status: "success get learn by id",
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