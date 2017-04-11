window.App= {room:{submit: function(){}}}

var columnsReducer = require('ws-cards/reducers/columns')

let state = []

describe('columns reducer', () => {
  beforeEach(()=>{
    state = [
      {
        id: 1,
        name: "todo",
        cards: [
          {
            id: 1,
            title: "C1",
            description: "test",
            column_id: 1,
            position: 0
          }
        ]
      },
      {
        id: 2,
        name: "done",
        cards: [
          {
            id: 2,
            title: "C2",
            description: "test",
            column_id: 2,
            position: 0
          },
          {
            id: 3,
            title: "C3",
            description: "test",
            column_id: 2,
            position: 1
          }
        ]
      }
    ]
  })

  it('should return the initial state', () => {
    expect(
      columnsReducer(undefined, {})
    ).toEqual([])
  })

  it('should handle RECEIVE_BOARD', () => {
    expect(
      columnsReducer([], {
        type: 'RECEIVE_BOARD',
        json: {columns: state}
      })
    ).toEqual(state)
  })

  it('should handle MOVE_CARD', () => {
    const result = [
      {
        id: 1,
        name: "todo",
        cards: [ ]
      },
      {
        id: 2,
        name: "done",
        cards: [
          {
            id: 1,
            title: "C1",
            description: "test",
            column_id: 2,
            position: 0
          },
          {
            id: 2,
            title: "C2",
            description: "test",
            column_id: 2,
            position: 1
          },
          {
            id: 3,
            title: "C3",
            description: "test",
            column_id: 2,
            position: 2
          }
        ]
      }
    ]
    expect(
      columnsReducer(state, {
        type: 'MOVE_CARD',
        source: state[0].cards[0],
        target: state[1].cards[0]
      })
    ).toEqual(result)
  })

  it('should handle ATTACH_TO_COLUMN', () => {
    var oldState = [
      {
        id: 1,
        name: "todo",
        cards: [
          {
            id: 1,
            title: "C1",
            description: "test",
            column_id: 1,
            position: 0
          }
        ]
      },
      {
        id: 2,
        name: "done",
        cards: [ ]
      }
    ]
    const newState = [
      {
        id: 1,
        name: "todo",
        cards: [ ]
      },
      {
        id: 2,
        name: "done",
        cards: [
          {
            id: 1,
            title: "C1",
            description: "test",
            column_id: 2,
            position: 0
          }
        ]
      }
    ]
    expect(
      columnsReducer(oldState, {
        type: 'ATTACH_TO_COLUMN',
        col: oldState[1],
        card: oldState[0].cards[0]
      })
    ).toEqual(newState)
  })
})
