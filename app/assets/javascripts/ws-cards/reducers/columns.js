var _ = require('lodash')

let setPositions = (array) => {
  return array.map((elt, i) => {
    return Object.assign({}, elt, {position: i})
  })
}

const columns = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOARD':
      return [...action.json.columns]
    case 'ATTACH_TO_COLUMN':
      return state.map((col, i) => {
        if(col.id != action.col.id){
          col.cards = col.cards.filter(card => card.id != action.card.id)
        }else{
          col.cards = col.cards.concat([action.card])
          action.card.column_id = action.col.id
        }
        col.cards = setPositions(col.cards)
        return Object.assign({}, col)
      })
    case 'MOVE_CARD':
      const sourceColumn = _.find(state, col => col.id == action.source.column_id)
      const targetColumn = _.find(state, col => col.id == action.target.column_id)
      const sourceCardIndex = action.source.position
      const targetCardIndex = action.target.position

      if(sourceColumn.id == targetColumn.id) {
        sourceColumn.cards.splice(sourceCardIndex, 1)
        sourceColumn.cards.splice(targetCardIndex, 0, action.source)
      } else {
        action.source.column_id = targetColumn.id
        sourceColumn.cards.splice(sourceCardIndex, 1)
        targetColumn.cards.splice(targetCardIndex, 0, action.source);
      }

      targetColumn.cards = setPositions(targetColumn.cards)
      sourceColumn.cards = setPositions(sourceColumn.cards)

      return state.map((col, i) => {
        if (col.id == sourceColumn.id){
          return JSON.parse(JSON.stringify(sourceColumn))
        }else if(col.id == targetColumn.id){
          return JSON.parse(JSON.stringify(targetColumn))
        }else{
          return col
        }
      })
    default:
      return state
  }
}

module.exports = columns
