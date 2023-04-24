const express = require('express')
const router = express.Router()
const {User} = require('../../../models')

router.get("/user/:id", async (req, res) => {

    const id = req.params.id
    console.log(id)
    const user = await User.findOne({
        where: {
            id: id
        }
    })

    console.log(user)

    if (user !== null) {
        res.json({
            status: "success get user by id",
            code: 200,
            data: user
        })
    } else {
        res.json({
            status: "failed! user not found",
            code: 404,
        })
    }
})

module.exports = router