class Character {
	#_race;
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;
	}

		speak(speech) {
			console.log(`Игрок ${this.name} расы: ${this.race} говорит ${speech}`);
		}

	set race(race) {
		this.#_race = race;
	}

	get race() {
		return this.#_race;
	}
}

class Orc extends Character {
	#weapons = []
	constructor(race, name, language, weapon){
		super(race, name, language)
		this.#weapons.push(
			{
				weapon: weapon,
				damage: Math.floor(Math.random() * 20),
				durability: Math.random() * 100
			}
		);
	}

	showWeapons() {
		console.log(`В арсенале игрока ${this.name}, расы ${this.race}, содержатся - ${this.#weapons.forEach((w, i) => i < this.#weapons.length - 1? w.weapon + ',' : w.weapon)}`);
	}

	punch(enemy) {
		this.#weapons.filter(w => w.durability > 0);
		if(this.#weapons.length > 0) {
			const weapon = this.#weapons.length === 1 ? this.#weapons[0] : this.#weapons[Math.floor(Math.random() * this.#weapons.length)];
			console.log(`${this.race}, ${this.name} берет ${weapon.weapon} и наносит урон ${enemy.name} в размере: ${weapon.damage} Единиц урона.`);
			this.#weapons.forEach(w => {
				if(w.weapon === weapon.weapon) {
					w.durability--;
				}
			});
		} else {
			console.log(`У игрока ${this.name}, расы: ${this.race} нет оружия, он нанес удар кулаком в размере ${Math.random() * 5} Единиц урона`);
		}
	}

	addWeapon(weapon) {
		const isExist = this.#weapons.some(w => w.weapon === weapon);
		isExist == true ? console.log(`Оружие - ${weapon} уже присутствует в арсенале`) : this.#weapons.push(
			{
				weapon: weapon,
				damage: Math.random * 20,
				durability: Math.random() * 100
			}
		);
	}

	speak(speech) {
		console.log(`${this.race} - ${this.name} яростно кричит: ${speech.split('').reverse().join('').toUpperCase()}`);
	}
}

class Elf extends Character {
	#spells = [];
	constructor(race, name, language) {
		super(race, name, language);
	}

	incantation(enemy) {
		if(this.#spells.length > 0 ) {
			const spell = this.#spells.length == 1 ? this.#spells[0] : this.#spells[Math.floor(Math.random() * this.#spells.length)];
			console.log(`Игрок ${this.name}, расы ${this.race} использовал заклятье ${spell} на ${enemy.name} и нанес ${(Math.random() * 15).toFixed(2)} единиц урона`);
		} else {
			console.log(`Игрок ${this.name}, расы ${this.race} ещё не выучил ни одного заклятья`);
		}
	}

	addSpell(spell) {
		if (this.#spells.includes(spell)) {
			console.log(`Заклятье ${spell} уже изучено`);
		} else {
			this.#spells.push(spell);
			console.log(`Заклятье ${spell} добавлено`)
		}
	}

	showSpells() {
		const message = this.#spells.length > 0 ? `Игрок ${this.name}, расы ${this.race}, знает изучил заклинания: ${this.#spells.join(',')}`: `Игрок ${this.name}, расы ${this.race} ещё не выучил ни одного заклятья`;
		console.log(message);
	}

	speak(speech) {
		console.log(`Игрок ${this.name}, расы: ${this.race} сказал : ${ this.#translate(speech)}`);
	}
	#translate(speech){
	const symbols = ['!','*','§','$','%','&','/','#'];
	let translated = '';
	for(let i = 0; i < speech.length; i++) {
		translated += symbols[Math.floor(Math.random() * symbols.length)];
	}
	return translated;
}

}

const person = new Orc('Орк', 'Барт', 'Орчий', 'Топор');

const person2 = new Elf('Эльф', 'Валлиан', ' Эльфийский');

person.punch(person2);

person2.addSpell('avadakedavra');

person2.incantation(person);

person2.speak('сдавайся');
person.speak('нет');