const PlayerController = require('../controllers/players_controller');

module.exports = (app) => {
  app.get('/', PlayerController.landing);
  app.get('/playerBase', PlayerController.playerBase);
  app.post('/playerBase', PlayerController.newPlayer);
  app.get('/playerBase/newPlayer', PlayerController.new);
};
