var React = require('react')
var PropTypes = require('react').PropTypes
var Component = require('react').Component
var Card = require('./Card')

class Columns extends Component{
  componentDidMount(){
    this.props.onLoadBoard()
  }

  render() {
    return (
      <div>
      {this.props.columns.map((col, i) =>
        <div
          key = {i}
        >
          <h2>{col.name}</h2>
          {col.cards.map((card, j) =>
            <Card
              key = {j}
              card = {card}
            />
          )}
        </div>
      )}
      </div>
    )
  }
}

module.exports = Columns
