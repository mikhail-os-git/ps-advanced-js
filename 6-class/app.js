class Car{
	#make;
	#model;
	#run;
	constructor(make, model, run) {
		this.#make = make;
		this.#model = model;
		this.#run = run;
	}

	get run() {
		return this.#run;
	}

	set run(newrun) {
		console.log("Пробег изменен c "+ this.run + " на " + newrun);
		this.#run = newrun;
	}

	info() {
		console.log(`Марка: ${this.#make}, Модель: ${this.#model}, Пробег ${this.run}.`);
	}
}


const audi = new Car('Audi', 'A4', 60000);
console.log(audi.run);
audi.run = 70000;
console.log(audi.run);
audi.info();