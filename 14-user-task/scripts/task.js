export class Task {
	#tasks = []
	constructor(...task){
		this.#tasks.push(...task);
	}

	addTask(...task){
		this.#tasks.push(...task);
	}

	showTasks(){
		return this.#tasks;
	}

	run(){
    if (this.#tasks.length === 0) return "No tasks available";
    const taskIndex = this.#tasks.length > 1 ? Math.floor(Math.random() * this.#tasks.length) : 0;
    return this.#tasks[taskIndex];
	}

	deleteTask(taskName){
		if(!this.#tasks.includes(taskName)){
			console.log('There is no task with that name in the list.');
			return;
		}else {
			this.#tasks.filter(task => task != taskName);
			console.log(`The task ${taskName} has been removed.`);
		}
	}
}