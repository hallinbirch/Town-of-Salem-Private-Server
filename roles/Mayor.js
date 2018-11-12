const Player = require('../Player.js');

class Mayor extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Mayor;