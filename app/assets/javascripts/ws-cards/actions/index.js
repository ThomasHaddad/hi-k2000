const actions = {

  fetchBoard : (dispatch) => {
    let urlJSON = window.location.pathname + '.json'
    fetch(urlJSON, {
      credentials: 'same-origin',
    }).then(response => response.json())
      .then (json => {
      dispatch(actions.receiveBoard(json))
    })
  },
  receiveBoard: (json) => ({
    type: 'RECEIVE_BOARD',
    json
  }),
  moveCard: (source, target) => ({
    type: 'MOVE_CARD',
    source,
    target
  }),
  attachToCol: (col, card) => ({
    type: 'ATTACH_TO_COLUMN',
    col,
    card
  })
}

module.exports = actions
