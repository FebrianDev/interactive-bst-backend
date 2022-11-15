const express = require('express')
const router = express.Router()
const {Project} = require('../../../models')

router.get("/project/id/:id", async (req, res) => {

    const idProject =req.params.id
    console.log(idProject)
    const project = await Project.findOne({
        where: {
            id:idProject
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

