class Card < ApplicationRecord
  belongs_to :column
  validates_presence_of :title, :description
end
