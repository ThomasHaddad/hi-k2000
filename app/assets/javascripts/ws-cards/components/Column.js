var React = require('react')
var PropTypes = require('react').PropTypes
var Component = require('react').Component
var Card = require('./Card')
var DropTarget = require('react-dnd').DropTarget
var compose = require('redux').compose

const cardTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem().card

    if(!targetProps.col.cards.length) {
      targetProps.onAttachToCol(targetProps.col, sourceProps)
    }
  }
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Column extends Component{

  render() {
    var connectDropTarget = this.props.connectDropTarget
    return connectDropTarget(
      <div
        className="col"
        key = {this.props.index}
      >
        <h2>{this.props.col.name}</h2>
        {this.props.col.cards.map((card, j) =>
          <Card
            onAttachToCol={(col, card) => this.props.onAttachToCol(col, card)}
            onMove={(source, target) => this.props.onMove(source, target)}
            key = {j}
            card = {card}
          />
        )}
      </div>
    )
  }
}

module.exports = DropTarget('CARD', cardTarget, collect)(Column)
