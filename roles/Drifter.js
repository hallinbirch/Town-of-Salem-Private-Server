const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');

class Drifter extends Player {
	constructor(client) {
		super(client);
		this.setFaction('NEUTRAL');
	}
	role() {

	}
	visit(visitor, abilityType) {
		this.canPerformRole();
		if(this.target) {
			visitor.target = this.target;
			this.target.visit(visitor, abilityType);
		}
	}
	reset() {
		super.reset();
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Drifter;