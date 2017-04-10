# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.delete_all

board = Board.create(title: "K2000 board")

col_1 = Column.create(name: 'A faire', board_id: board.id)
Column.create(name: 'En cours', board_id: board.id)
Column.create(name: 'Fait', board_id: board.id)

desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

4.times do |n|
  Card.create(title: "Carte #{n}", description: desc, position: n, column_id:col_1.id)
end
