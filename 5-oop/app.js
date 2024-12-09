const Person = function(race, name, language) {
	this.race = race;
	this.name = name;
	this.language = language;
};

Person.prototype.speak = function(speech){
	console.log(`${this.race} ${this.name}, говорит ${speech}`);
}

const Orc = function(race, name, language, weapon) {
	Person.call(this, race, name, language);
	this.weapon = weapon;
	this.spells = []
}

Orc.prototype = Object.create(Person.prototype);

Orc.prototype.punch = function() {
	const damageTyps = [`${this.race} ${this.name}, берет ${this.weapon} и наносит удар: `, 'Враг истекает кровью: '];
	for(let i = 0; i < damageTyps.length; i++) {
		console.log(damageTyps[i] + ((Math.random() * 30).toFixed(1)) + ' Единиц урона');
	}
}

Orc.prototype.incantation = function() {
	const spellsCount = this.spells.length;
	if(spellsCount == 0) {
		console.log(`${this.race} ${this.name}, еще пока не изучил заклинания`);
	} else {
		console.log(`${this.race}: ${this.name}, применяет заклинание ${this.spells[Math.floor(Math.random() * spellsCount)]} и наносит урон: ${(Math.random() * 50 + 1).toFixed(1)} Единиц урона`)
	}
}

Orc.prototype.addIncantation = function(spell){
	if(!this.spells.includes(spell)) {
		this.spells.push(spell);
	}	else {
		console.log("Заклинание: " + spell + "уже изучено");
	}
}

const held = new Person('Норд', 'Бьёрн', 'Драконий язык');

held.speak("Ту'ум");

const rogmorrok = new Orc('Горный орк', 'Рогморрок', 'Орчий', 'Меч');
rogmorrok.incantation();
rogmorrok.punch();
rogmorrok.addIncantation('Авада кедавра');
rogmorrok.incantation();
