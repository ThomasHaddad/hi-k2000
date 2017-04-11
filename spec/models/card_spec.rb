require 'rails_helper'

RSpec.describe Card, :type => :model do

  it { should belong_to(:column) }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }

end
