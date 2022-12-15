const express = require('express')
const router = express.Router()
const Validator = require('fastest-validator')
const {Project} = require('../../../models')

const v = new Validator()

//Create Project
router.post('/project', async (req, res) => {
    const schema = {
        name_project: 'string|empty:false',
        data_type: 'string|empty:false',
        id_user: 'string|empty:false',
        bst_operation: 'string'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const nameProject = await Project.findOne({where: {name_project: req.body.name_project}})

    if (nameProject) {
        return res.status(400).json({
            status: 'error',
            message: 'Project Name cannot be same!'
        })
    }

    const data = {
        name_project: req.body.name_project,
        id_user: req.body.id_user,
        data_type: req.body.data_type,
        bst_operation: req.body.bst_operation
    }

    const createProject = await Project.create(data)

    return res.status(201).json({
        message: 'success',
        code: 201,
        data: {
            id: createProject.id
        }
    })
})

module.exports = router