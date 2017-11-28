const fs = require('fs'); 
const cache = {}; 
const cachee = {};

function readFileSynchronous(filename) {
    if(cache[filename]) {
        return "Is Cached:  " + cache[filename];
    } else {
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return "Not Cached: " + cache[filename];
    }
}

function readFileAsynchronous(filename, callback) { 
    if(cachee[filename]) { 
        process.nextTick(() => callback("Is Cached:  " + cachee[filename])); 
    } else { 
        //asynchronous function 
        fs.readFile(filename, 'utf8', (err, data) => {
        if(err) {
            console.log('>> ' + err); 
        } else { 
            cachee[filename] = data; 
            callback("Not Cached: " + data); 
        }
    }); 
  } 
} 

console.log(readFileSynchronous("test.txt"))
console.log(readFileSynchronous("test.txt"))
console.log(readFileAsynchronous("test.txt", data => {
    console.log(data)
}))
console.log(readFileAsynchronous("test.txt", data => console.log(data)))

//next one will print out an error but continue
console.log(readFileAsynchronous("test.tx", data => console.log(data)))