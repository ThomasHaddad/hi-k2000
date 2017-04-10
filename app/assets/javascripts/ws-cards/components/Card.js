var React = require('react')
var PropTypes = require('react').PropTypes
var DragSource = require('react-dnd').DragSource
var DropTarget = require('react-dnd').DropTarget
var compose = require('redux').compose

var cardSource = {
  beginDrag: function (props) {
    return {
      card: props.card
    };
  }
}

const cardTarget = {

  drop(targetProps, monitor) {
    const target = targetProps.card;
    const sourceProps = monitor.getItem();
    const source = sourceProps.card;

    if(source.id !== target.id) {
      targetProps.onMove(source, target);
    }
  }


}

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function collectDrag(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Card = ({index, card, isDragging, isOver, connectDragSource, connectDropTarget}) => {
  return compose(connectDragSource, connectDropTarget)(
    <div
      className="card"
      style={{opacity: isDragging || isOver ? 0.5 : 1 }}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Position : {card.position} </p>
    </div>
  )
}

module.exports = compose(
  DragSource('CARD', cardSource, collectDrag),
  DropTarget('CARD', cardTarget, collectDrop)
)(Card)
