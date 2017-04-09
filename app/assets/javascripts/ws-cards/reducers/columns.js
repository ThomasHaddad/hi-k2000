const columns = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOARD':
      return [...action.json.columns]
    default:
      return state
  }
}

module.exports = columns
