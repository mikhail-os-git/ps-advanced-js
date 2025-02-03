import { Task } from './task.js';
import { User } from './user.js';


const task = new Task('coding learning', 'sport', 'pause');

const user = new User('Mikhail', task);

user.do();