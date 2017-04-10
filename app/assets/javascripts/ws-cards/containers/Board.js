var connect = require('react-redux').connect
var React = require('react')
var actions = require('../actions')
var Board = require('../components/Board')

const mapDispatchToProps = (dispatch) => {
  return {
    onReceiveBoard: (json) =>{
      dispatch(actions.receiveBoard({columns: json}))
    }
  }
}

const BoardContainer = connect(null, mapDispatchToProps)(Board)

module.exports = BoardContainer
