export class User {
	#name;
	#tasks;
	constructor(name, tasks){
		this.#name = name;
		this.#tasks = tasks;
	}

	get name(){
		return this.#name;
	}

	changeName(name){
		console.log(`Name changed: from ${this.#name} to ${name}`);
		this.#name = name;
	}

	tasks(){
		const tasks = this.#tasks.showTasks();
    if (tasks.length > 0) {
			console.log(`User ${this.#name} has the following tasks: ${this.#tasks?.showTasks().join(',')}`);
			} else {
      console.log(`User ${this.#name} has no tasks.`);
    }
	}

	do(){
		const task = this.#tasks.run();
    if (task === "No tasks available") {
      console.log(`User ${this.#name} has no tasks to do.`);
    } else {
      console.log(`User ${this.#name} is doing: ${task}`);
			setTimeout(()=>{
				this.#tasks.deleteTask(task);
			}, 1000);
    }
	}

}