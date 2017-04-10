class BoardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "board_channel"
    ap "subscribed"
  end

  def unsubscribed
  end

  def submit(data)
    cards = []
    data['state'].each do |col|
      cards << col['cards']
    end
    cards = cards.flatten(1)
    Card.transaction do
      cards.each do |card|
        Card.find(card['id']).update(position: card['position'], column_id: card['column_id'])
      end
    end

    ActionCable.server.broadcast "board_channel", {state: data['state']}
  end
end
