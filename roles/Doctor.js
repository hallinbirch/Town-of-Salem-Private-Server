const Player = require('../Player.js');

class Doctor extends Player {
	constructor(client) {
		super(client);
		this.priority = 1;
		this.abilities = 1;
		this.setFaction('TOWN');
	}
	role() {
		if(this.canPerformRole())
			this.target.setHealed();
			this.target.visit(this);
	}
	reset() {
		this.attack = null;
		this.defense = null;
	}
}

module.exports = Doctor;