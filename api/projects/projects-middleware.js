// // add middlewares here related to projects
// const Project = require('../projects/projects-model');

// const validateProjectId = async (req, res, next) => {
//   try {
//     const project = await Project.get(req.params.id)
//     if (!project) {
//       res.status(404).json({
//         message: ''
//       })
//     } else {
//       req.project = project
//       next()
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: '',
//       err: err.message,
//       stack: err.stack
//     })
//   }
// }

// module.exports = {
//   validateProjectId,
// }