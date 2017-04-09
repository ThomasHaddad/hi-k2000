var combineReducers = require('redux').combineReducers
var columns = require('./columns')
var cards = require('./cards')

const cardsApp = combineReducers({
  columns,
  cards
})

module.exports = cardsApp
