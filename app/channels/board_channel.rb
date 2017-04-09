class BoardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "board_channel"
    ap "subscribed"
  end

  def unsubscribed
  end

end
