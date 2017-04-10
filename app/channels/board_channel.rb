class BoardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "board_channel"
    ap "subscribed"
  end

  def unsubscribed
  end

  def submit(data)
    ap "submit"
    ActionCable.server.broadcast "board_channel", {state: data['state']}
  end
end
