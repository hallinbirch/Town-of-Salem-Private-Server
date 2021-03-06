const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startDefenseTransition(playerPosition) {
    let game = TownOfSalem.getGame();
    clearTimeout(game.timer);
    let players = game.getPlayerList();
    game.setState(States.DEFENSETRANSITION);
    game.numberOfTrials--;
    players.sendToAll(u.code(98) + u.code(playerPosition) + u.code(0));
    setTimeout(function() {
        require('./StartDefense')();
    }, 5000);
}

module.exports = startDefenseTransition;