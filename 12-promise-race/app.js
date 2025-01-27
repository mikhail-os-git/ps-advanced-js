const promises = [
  new Promise((resolve) => setTimeout(() => resolve('A'), Math.random() * 1000)),
  new Promise((resolve) => setTimeout(() => resolve('B'), Math.random() * 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject('C'), Math.random() * 1000)),
];


async function race(promises) {
	// let firstResolved = null;
// promises.forEach((promise) => {
//   promise
//     .then((value) => {
//       if (!firstResolved) {
//         firstResolved = value;
// 				// console.log(firstResolved);
//       }
//     })
//     .catch((reason) => {
//       if (!firstResolved) {
// 				firstResolved = new Error(`Error: ${reason}`);
//       }
//     });
// });

	return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    }
  });

}


console.log(race(promises));
console.log(Promise.race(promises));