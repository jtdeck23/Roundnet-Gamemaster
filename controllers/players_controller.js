const Player = require('../models/player');

module.exports = {
  landing(req, res, next) {
    res.render('landing');
  },

  playerBase(req, res, next) {
    Player.find({}, (err, players) => {
      if(err){
        console.log(err);
      } else {
        res.render('playerBase', { players: players });
      }
    });
  },

  newPlayer(req, res, next) {
    // const name = req.body.name;
    // const image = req.body.image;
    const playerProps = req.body;
    // const newPlayer = { name: name, image: image }

    Player.create(playerProps)
      .then(player => res.send(player))
      .catch(next);

    res.redirect('/playerBase');
  },

  new(req, res, next) {
    res.render('newPlayer.ejs');
  }
}
