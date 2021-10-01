// add middlewares here related to actions
const Action = require('../actions/actions-model');

const validateActionId = async (req, res, next) => {
  try {
    const action = await Action.get(req.params.id)
    if (!action) {
      res.status(404).json({
        message: ''
      })
    } else {
      req.action = action
      next()
    }
  } catch (err) {
    res.status(500).json({
      message: '',
      err: err.message,
      stack: err.stack,
    })
  }
}

const validateAction = (req, res, next) => {
  const { description, notes, completed } = req.body
  if (!description || !notes || !completed) {
    res.status(400).json({
      message: ''
    })
  } else {
    req.description = description 
    req.notes = notes 
    req.completed = completed 
    next()
  }
}

module.exports = {
  validateActionId,
  validateAction
}