json.extract! board, :id, :title, :created_at, :updated_at
json.columns board.columns do |column|
  json.id column.id
  json.name column.name
  json.cards column.cards
end
