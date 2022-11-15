const express = require('express')
const router = express.Router()
const {Project} = require('../../../models')

router.get("/project/:id_user",
    async (req, res) => {

        const idUser = req.params.id_user
        console.log("Id User "+idUser)
        const project = await Project.findAll({
            where: {
                id_user: idUser
            }
        })

        console.log(project)

        if (project !== null) {
            res.json({
                status: "success get project by id",
                code: 200,
                data: project
            })
        } else {
            res.json({
                status: "failed! project not found",
                code: 404,
            })

        }
    })

module.exports = router

