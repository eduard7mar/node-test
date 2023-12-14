const fs = require("fs");
const dns = require("dns");
const { timeStamp } = require("console");

console.log("Program start");

// Timeouts
setTimeout(() => console.log("Timeout 1", performance.now()), 0);
setTimeout(() => {
    process.nextTick(() => console.log("next tick 2", performance.now()));
    console.log("Timeout 2", performance.now())}, 10);

// Close events
fs.writeFile("./test.txt", "Hello Node.js", () => console.log("File written", performance.now()));

// Promises
Promise.resolve().then(() => console.log("Promise 1", performance.now()));

// Next tick
process.nextTick(() => console.log("Next tick 1", performance.now()));

setImmediate(() => console.log("Immediate 1", performance.now()));

dns.lookup("localhost", (err, address, family) => {
    console.log("DNS 1 localhost", address, performance.now());
})

console.log("Program end");