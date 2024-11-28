'use strict';


const users = [{id: 1, name: 'John'},{id: 2, name: 'Peter'},{id: 1, name: 'John'}];

const uniqueUsersSet = new Set();
function uniqueness(array, set) {
array.map((user) => {
		if(!Array.from(set).find(exist => exist.id == user.id)) {
			set.add(user);
		}
	})
}

uniqueness(users, uniqueUsersSet);


console.log(uniqueUsersSet);



