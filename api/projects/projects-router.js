// Write your "projects" router here!
const express = require('express');
const { validateProjectId, validateProject } = require('../projects/projects-middleware');
const Project = require('./projects-model');

const router = express.Router();

// .get()

router.get('/', (req, res, next) => {
  Project.get()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res, next) => {
  res.json(req.project)
})

// .post()

router.post('/', validateProject, (req, res, next) => {
  Project.insert({ name: req.name, description: req.description, completed: req.completed })
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(next)
})

// .put() ***

router.put('/:id', validateProjectId, validateProject, (req, res, next) => {
  Project.update(req.params.id, { name: req.body.name, description: req.body.description, completed: req.body.completed })
    .then(updatedProject => {
      res.json(updatedProject)
    })
    .catch(next)
})

// .delete()

router.delete('/:id', validateProjectId, async (req, res, next) => {
  try {
    await Project.remove(req.params.id)
    res.json(req.project)
  } catch (err) {
    next(err)
  }
})

/////

router.get('/:id/actions', validateProjectId, async (req, res, next) => {
  try {
    const result = await Project.getProjectActions(req.params.id)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router;