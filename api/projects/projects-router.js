// Write your "projects" router here!
const express = require('express');
// const { validateProjectId } = require('../projects/projects-middleware');
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

module.exports = router;