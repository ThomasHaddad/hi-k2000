var Columns = require('../containers/Columns')
var React = require('react')
var Component = require('react').Component

class Board extends Component {
  componentDidMount() {
    let that = this

    if (typeof App !== 'undefined'){
      App.room = App.cable.subscriptions.create("BoardChannel", {
        received: function(data) {
          that.props.onReceiveBoard(data.state)
        },
        submit: function(state){
          return this.perform('submit', {state : state})
        }
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
