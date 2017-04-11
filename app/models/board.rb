class Board < ApplicationRecord
  has_many :columns

  validates_presence_of :title
end
