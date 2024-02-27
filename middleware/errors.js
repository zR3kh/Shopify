const mongoose = require("mongoose")

const invalidId = (err, req, res, next) => {
  if (err instanceof mongoose.CastError) {
    res.status(400).json({error: 'Please provide a correct ID.'})
  } else {
    next(err)
  }
}

module.exports = invalidId;