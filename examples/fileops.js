const fs = require('fs'); 
const cache = {}; 
function readFileSynchronous(filename) {
    if(cache[filename]) {
        console.log("read from cache");
        return cache[filename];
    } else {
        console.log("read from disk");
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename];
    }
}

console.log(readFileSynchronous("test.txt"))
console.log(readFileSynchronous("test.txt"))