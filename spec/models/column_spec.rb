require 'rails_helper'

RSpec.describe Column, :type => :model do

  it { should belong_to(:board) }

  it { should validate_presence_of(:name) }

end
