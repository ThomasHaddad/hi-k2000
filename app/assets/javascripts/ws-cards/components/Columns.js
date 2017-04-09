var React = require('react')
var PropTypes = require('react').PropTypes
var Component = require('react').Component

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
          <h2>{col.test}</h2>
        </div>
      )}
      </div>
    )
  }
}

module.exports = Columns
