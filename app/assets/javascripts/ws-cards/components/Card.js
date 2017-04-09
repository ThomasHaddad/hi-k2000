var React = require('react')

const Card = ({index, card}) => {
  return (
    <div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Position : {card.position} </p>
    </div>
  )
}

module.exports = Card
