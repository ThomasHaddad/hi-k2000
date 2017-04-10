var React = require('react')
var Board = require('../containers/Board')
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;

const App = () => (
  <div>
    <Board />
  </div>
)

module.exports = DragDropContext(HTML5Backend)(App)
