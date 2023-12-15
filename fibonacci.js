setTimeout(() => console.log("Timeout"), 0);

// function fib(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(10));

// function fib(n) {
//   return new Promise((resolve, reject) => {
//     if (n === 0 || n === 1) {
//       return resolve(n);
//     }
//     setImmediate(() => {
//       Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
//         resolve(fib1 + fib2)
//       );
//     });
//   });
// }

// fib(10).then((res) => console.log(res));

const cache = new Map();
function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n));
        }
        setImmediate(() => {
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => {
                cache.set(n, fib1 + fib2);
                resolve(fib1 + fib2);
            });
        });
    });
}

fib(40).then((res) => console.log(res));
