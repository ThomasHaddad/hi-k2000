var actions = require('ws-cards/actions')

describe('actions', () => {
  it('should create an action to receive board', () => {
    const data = []
    const expectedAction = {
      type: 'RECEIVE_BOARD',
      json: data
    }
    expect(actions.receiveBoard(data)).toEqual(expectedAction)
  })

  it('should create an action to move cards', () => {
    const source = {}
    const target = {}
    const expectedAction = {
      type: 'MOVE_CARD',
      source,
      target
    }
    expect(actions.moveCard(source, target)).toEqual(expectedAction)
  })

  it('should create an action to attach card to an empty column', () => {
    const col = {}
    const card = {}
    const expectedAction = {
      type: 'ATTACH_TO_COLUMN',
      col,
      card
    }
    expect(actions.attachToCol(col, card)).toEqual(expectedAction)
  })
})
