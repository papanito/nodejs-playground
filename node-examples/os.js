const os = require('os');
console.log("Arch: " + os.arch() + " " + os.endianness())
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
console.log("CPUs: " + JSON.stringify(os.cpus(),null, 2))
console.log("Host: " + os.hostname())