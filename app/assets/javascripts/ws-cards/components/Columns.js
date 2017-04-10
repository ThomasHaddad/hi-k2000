var React = require('react')
var PropTypes = require('react').PropTypes
var Component = require('react').Component
var Column = require('./Column')

class Columns extends Component{

  componentDidMount(){
    this.props.onLoadBoard()
  }

  render() {
    return (
      <div>
      {this.props.columns.map((col, i) =>
        <Column
          col={col}
          index={i}
          key={i}
          onMove={(source, target) => this.props.onMove(source, target)}
          onAttachToCol={(col, card) => this.props.onAttachToCol(col, card)}
        />
      )}
      </div>
    )
  }
}

module.exports = Columns
