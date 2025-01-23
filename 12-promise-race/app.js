const promises = [
  new Promise((resolve) => setTimeout(() => resolve('A'), Math.random() * 1000)),
  new Promise((resolve) => setTimeout(() => resolve('B'), Math.random() * 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject('C'), Math.random() * 1000)),
];


async function race(promises) {
let firstResolved = null;
promises.forEach((promise) => {
  promise
    .then((value) => {
      if (!firstResolved) {
        firstResolved = value;
				console.log(firstResolved);
      }
    })
    .catch((reason) => {
      if (!firstResolved) {
				firstResolved = reason;
      console.log(new Error('error:' + firstResolved));
      }
    });
});
}

race(promises);