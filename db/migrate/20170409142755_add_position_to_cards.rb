class AddPositionToCards < ActiveRecord::Migration[5.0]
  def up
    add_column :cards, :position, :integer
    Column.all.each do |col|
      col.cards.all.each_with_index do |card, index|
        card.position = index
        card.save!
      end
    end
  end

  def down
    remove_column :cards, :position
  end
end
