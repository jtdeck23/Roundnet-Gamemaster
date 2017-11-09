const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  games: {
    type: Number
  },
  wins: {
    type: Number
  },
  image: {
    type: String
  },
  bio: {
    type: String
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
