var actions = require('../actions')
var connect = require('react-redux').connect
var ColumnsComponent = require('../components/Columns')
var React = require('react')

const mapStateToProps = (state) => {
  return {
    columns: state.columns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadBoard: () =>{
      actions.fetchBoard(dispatch)
    }
  }
}

const Columns = connect(mapStateToProps, mapDispatchToProps)(ColumnsComponent)

module.exports = Columns
