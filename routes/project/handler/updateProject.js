const express = require('express')
const router = express.Router()
const {Project} = require('../../../models')

router.put("/project/id/:id", async (req, res) => {

    const idProject = req.params.id
    console.log(idProject)

    const {bst_operation} = req.body

    const project = await Project.update({bst_operation: bst_operation, updatedAt: Date.now()}, {
        where: {
            id: idProject
        }
    })

    console.log(project)

    if (project[0] === 1) {
        return res.json({
            status: "success save data operation bst",
            code: 200,
        })
    } else {
        return res.json({
            status: "failed! id not found",
            code: 404,
        })
    }

})

module.exports = router
