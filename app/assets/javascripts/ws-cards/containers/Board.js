var connect = require('react-redux').connect
var Columns = require('./Columns')
var React = require('react')
var Component = require('react').Component

class Board extends Component {
  componentDidMount() {

    if (typeof App !== 'undefined'){
      App.room = App.cable.subscriptions.create("BoardChannel", {
        connected: function() {},
        disconnected: function() {}
      });
    }
  }

  render() {
    return (
      <div>
        <Columns/>
      </div>
    )
  }
}

module.exports = Board
