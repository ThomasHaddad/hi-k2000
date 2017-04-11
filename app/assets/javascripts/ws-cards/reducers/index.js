var combineReducers = require('redux').combineReducers
var columns = require('./columns')

const cardsApp = combineReducers({
  columns
})

module.exports = cardsApp
